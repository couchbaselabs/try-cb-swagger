FROM node:15-buster-slim

LABEL maintainer="Couchbase"

WORKDIR /app

# RUN apt-get update && apt-get install -y \
    # build-essential python\
    # jq curl

COPY . /app 

RUN npm install

EXPOSE 8082

ENTRYPOINT ["node", "index.js"]
