# Etapa de build
FROM node:20-alpine as build

WORKDIR /app

# Copia dependências e instala
COPY package*.json ./
RUN npm install

# Copia o código e gera o build (dist)
COPY . .
RUN npm run build

# Etapa de produção com servidor Nginx leve
FROM nginx:alpine

# Copia os arquivos estáticos compilados para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia a configuração customizada do Nginx para suportar as rotas do React (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
