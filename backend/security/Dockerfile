# Dockerfile for security module

# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port if needed (for example, if running a server)
EXPOSE 3000

# Command to run the application (adjust according to your needs)
CMD ["npm", "start"]
