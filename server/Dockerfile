# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.15.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js/Prisma"

# Node.js/Prisma app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV=production


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y python-is-python3 pkg-config build-essential openssl 

# Install node modules
COPY --link package.json .
RUN npm install --production=false

# Generate Prisma Client
COPY --link prisma .
RUN npx prisma generate

# Copy application code
COPY --link . .

# Build application
RUN npm run build
RUN npx prisma migrate reset -f

# Remove development dependencies
RUN npm install


# Final stage for app image
FROM base

# Install packages needed for deployment
RUN apt-get update -qq && \
    apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Copy built application
COPY --from=build /app /app

# Setup sqlite3 on a separate volume
RUN mkdir -p /data
VOLUME /data
ENV DATABASE_URL="file:///data/circular.db"

# Entrypoint prepares the database.
ENTRYPOINT [ "/app/docker-entrypoint.js" ]

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "start" ]


# FROM node:slim as build-image
# RUN apt-get -qy update && apt-get -qy install openssl
# WORKDIR /app
# COPY package*.json ./
# COPY tsconfig.json ./
# COPY ./prisma ./prisma
# COPY ./src ./src
# RUN npm i && npm ci
# RUN npx prisma generate --schema=./prisma/schema.prisma
# RUN npm run build

# FROM node:slim
# WORKDIR /app
# COPY package*.json ./
# COPY --from=build-image ./app/dist ./dist
# RUN npm i && npm ci --omit=dev
# COPY . .

# # Setup sqlite3 on a separate volume
# RUN mkdir -p /data
# VOLUME /data
# ENV DATABASE_URL="file:///data/circular.db"
# # Entrypoint prepares the database.
# ENTRYPOINT [ "/app/docker-entrypoint.js" ]

# EXPOSE 3000
# CMD [ "npm", "run", "start:migrate" ]