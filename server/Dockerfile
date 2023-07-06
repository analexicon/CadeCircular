# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.15.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js/Prisma"

# Node.js/Prisma app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV=production


## Compiler image
# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y python-is-python3 pkg-config build-essential openssl 

# Install node modules
COPY --link package.json .
RUN npm install --production=false

# Generate Prisma Client
COPY --link prisma prisma
RUN npx prisma generate

# Copy application code
COPY --link . .

# Build application
RUN npm run build


# Remove development dependencies
RUN npm install --omit=dev


## Final stage for app image
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

# Set Environment Variable on the built image
ENV DATABASE_URL="file:///data/circular.db"

# Entrypoint prepares the database.
ENTRYPOINT [ "/app/docker-entrypoint.js" ]


# Start the server by default, this can be overwritten at runtime
EXPOSE 3333
CMD [ "npm", "run", "start" ]
