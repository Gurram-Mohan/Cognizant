# 🚀 Exercise 2 - Web API with Swagger & Postman

## 🎯 Objective

The objective of this exercise is to understand the implementation of ASP.NET Core Web API using .NET 8, configure Swagger for API documentation, test Web APIs using Postman, and customize routing for controllers.

---

## 🛠️ Technologies Used

- ASP.NET Core Web API
- .NET 8.0
- Swagger (OpenAPI)
- Postman
- Visual Studio 2022
- C#

---

## 📂 Project Structure

```
FirstWebApi
│
├── Controllers
│   ├── WeatherForecastController.cs
│   └── EmployeeController.cs
│
├── Models
│   └── Employee.cs
│
├── Properties
│   └── launchSettings.json
│
├── appsettings.json
├── appsettings.Development.json
├── Program.cs
├── FirstWebApi.csproj
└── README.md
```

---

## 📌 Features Implemented

### ✅ Swagger Configuration

- Configured Swagger (OpenAPI) for API documentation.
- Customized Swagger Title.
- Added Version Information.
- Added Contact Details.
- Added License Information.

---

### ✅ Employee Web API

Created an Employee Controller with the following endpoints:

| HTTP Method | Endpoint | Description |
|------------|----------|-------------|
| GET | `/api/Employee` | Retrieve all employees |
| GET | `/api/Employee/{id}` | Retrieve employee by Id |
| POST | `/api/Employee` | Add a new employee |
| PUT | `/api/Employee/{id}` | Update employee |
| DELETE | `/api/Employee/{id}` | Delete employee |

---

### ✅ Route Customization

Modified the controller route from

```
api/Employee
```

to

```
api/Emp
```

and verified the new endpoint using both Swagger and Postman.

---

### ✅ Postman Testing

Successfully tested:

- GET Request
- Response Body
- HTTP Status Code (200 OK)

---

## 📸 Output

The following outputs are included:

- Swagger Home Page
- Swagger GET Employee Response
- Postman GET Employee Response
- Swagger Route Updated to `/api/Emp`
- Postman GET `/api/Emp` Response

---

## 📚 Concepts Covered

- RESTful Web API
- HTTP Request & HTTP Response
- HTTP Action Verbs
  - GET
  - POST
  - PUT
  - DELETE
- HTTP Status Codes
- Routing in ASP.NET Core
- Swagger (OpenAPI)
- Postman API Testing
- API Controllers
- Model Creation

---

## ✅ Result

Successfully created an ASP.NET Core Web API using .NET 8, configured Swagger documentation, implemented CRUD operations for the Employee Controller, tested APIs using Swagger and Postman, and customized controller routing as per the exercise requirements.
