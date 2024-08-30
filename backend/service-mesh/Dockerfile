# Dockerfile for service-mesh module

# Use a lightweight Node.js image
FROM node:18-alpine

# Install Istioctl
RUN wget -qO- https://github.com/istio/istio/releases/download/1.16.0/istioctl-1.16.0-linux-amd64.tar.gz | tar xz -C /usr/local/bin

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port if needed (e.g., for debugging purposes)
EXPOSE 3000

# Command to run the application (adjust according to your needs)
CMD ["npm", "start"]
