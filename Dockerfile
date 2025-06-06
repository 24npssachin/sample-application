# Stage 1: Build the React App
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

# Install all dependencies (keep devDeps for build tools like react-scripts)
RUN npm install --legacy-peer-deps

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the React app
RUN npm run build && ls -la /app/build

# Stage 2: Serve with Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
