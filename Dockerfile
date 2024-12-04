# Stage 1: Build Stage
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json /app/
COPY . /app


# Install dependencies
RUN npm install 
RUN npm run build


EXPOSE 5173


CMD ["sh", "-c", "npm start"]
