FROM node:latest
WORKDIR /app

COPY package.json ./

# INSTALL DEPENDENCIES
RUN yarn install
COPY . ./
# BUILD COMMAND
RUN yarn run build
RUN yarn run export


FROM nginx
COPY --from=0 app/out /usr/share/nginx/html
# START COMMAND
CMD ["nginx", "-g", "daemon off;"]

