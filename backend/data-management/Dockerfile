# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's code
COPY ./src ./src

# Expose the port on which the service will run
EXPOSE 3000

# Command to run the service
CMD ["node", "src/index.ts"]
