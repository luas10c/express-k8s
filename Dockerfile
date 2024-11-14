FROM alpine:3.20 AS builder

WORKDIR /app

RUN apk --no-cache update && apk add nodejs npm

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

FROM alpine:latest AS production

WORKDIR /app

RUN apk --no-cache update && apk add nodejs

COPY --from=builder /app/package*.json .
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 7000

CMD ["node", "dist/main.js"]
