# Path: event-bus/Dockerfile

# Use an official Node.js image as a base
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on (if applicable)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
