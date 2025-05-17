FROM eclipse-temurin:21-jdk-alpine AS builder
LABEL authors="chatchakanyuon"
WORKDIR /app
COPY saving/. .
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine
LABEL authors="chatchakanyuon"
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]