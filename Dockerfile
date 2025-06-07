# Stage 1: Build the React app
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.26-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Replace default Nginx config with custom one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (EB expects this)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
