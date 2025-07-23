# Stage 1: Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY app/package*.json ./


RUN npm install --omit=dev

COPY app .

# Stage 2: Runtime stage
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=build /app /app

CMD ["npm", "start"]

