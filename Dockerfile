# UI build stage

FROM node as UI_BUILD

WORKDIR /ui

COPY ./ui/package*.json  ./
COPY ./ui/src/  ./src/
COPY ./ui/public/  ./public/

RUN npm install

COPY ./ui/ ./

RUN npm run build

# API build stage

FROM maven as API_BUILD

WORKDIR /api

COPY ./api/pom.xml ./
COPY ./api/src/ ./src/

COPY --from=UI_BUILD /ui/build/ ./src/main/resources/public/

RUN ["mvn", "clean", "install", "-DskipTests"]

# JAR deployment stage

FROM openjdk:11.0.6-jre-slim

WORKDIR /app

COPY --from=API_BUILD /api/target/*.jar app.jar

COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod a+x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
