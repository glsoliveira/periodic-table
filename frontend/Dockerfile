# Base stage for common setup
FROM node:18-alpine as base

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Development stage
FROM base as development

# Install all dependencies, including 'devDependencies'
RUN npm install

# Copy all project files
COPY . .

# Expose the port used by the development server
EXPOSE 5000

# Command to run the development server
CMD ["npm", "run", "dev"]

# Build stage for production
FROM base as build

# Install all dependencies (including 'devDependencies' necessary for the build)
RUN npm install

# Copy all project files
COPY . .

# Build the application
RUN npm run build

# Production stage using a lightweight static server
FROM nginx:alpine as production

# Copy built files from the build stage to the Nginx serve directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port for the production server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
