FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y maven
RUN mkdir /build
WORKDIR /build
COPY pom.xml /build
COPY src /build/src
COPY mvnw /build
RUN apt install maven
#RUN mvn dependency:go-offline -B
RUN mvn package
#COPY target /build/target
EXPOSE 8080
CMD [ "mvn spring-boot:run"]