# Use Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install
COPY . .

# Expose port and start app
EXPOSE 80
CMD ["npm", "start"]
