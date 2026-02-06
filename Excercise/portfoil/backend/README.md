# BDex Portfolio Backend (Spring Boot)

## Requirements
- Java 17+
- Maven (or IntelliJ IDEA with Maven support)

## Run
From this folder:
```bash
cd Excercise/portfoil/backend
mvn spring-boot:run
```

Backend starts on `http://localhost:8080`.

## API
### POST `/api/contact`
Body (JSON):
```json
{
  "name": "Ali",
  "email": "ali@example.com",
  "subject": "Hello",
  "message": "I want to work with you."
}
```

### GET `/api/contact`
Returns saved messages (newest first).

## Database (H2)
- File DB: `./data/portfolio` (created next to this `pom.xml` when you run the app)
- H2 console: `http://localhost:8080/h2-console`
  - JDBC URL: `jdbc:h2:file:./data/portfolio`
  - User: `sa`
  - Password: (empty)

