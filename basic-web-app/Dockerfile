FROM node:latest AS builder

WORKDIR /app

COPY . .
RUN npm install && \
npm run build

FROM nginx:latest
EXPOSE 80
COPY --from=builder /app/dist/basic-web-app/ /usr/share/nginx/html/
CMD ["nignx","-g","daemon off;"]