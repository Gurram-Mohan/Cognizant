# 🔐 Exercise 5 – JWT Authentication in ASP.NET Core Web API

## 🎯 Objective

This exercise demonstrates how to implement **JWT (JSON Web Token) Authentication** in an ASP.NET Core Web API application.

The application authenticates users, generates a JWT token, secures API endpoints using the **[Authorize]** attribute, and validates requests using Swagger.

---

# 🛠️ Technologies Used

- ASP.NET Core Web API
- C#
- JWT (JSON Web Token)
- Swagger (OpenAPI)
- Microsoft.AspNetCore.Authentication.JwtBearer
- Microsoft.IdentityModel.Tokens

---

# 📂 Project Structure

```
FirstWebApi
│
├── Controllers
│   ├── EmployeeController.cs
│   └── AuthController.cs
│
├── Models
│   ├── Employee.cs
│   ├── Department.cs
│   ├── Skill.cs
│   └── User.cs
│
├── Filters
│   ├── CustomAuthFilter.cs
│   └── CustomExceptionFilter.cs
│
├── Program.cs
└── appsettings.json
```

---

# 🚀 Features Implemented

- JWT Authentication
- Token Generation
- Token Validation
- Protected API using **[Authorize]**
- Swagger JWT Authorization
- Employee CRUD APIs
- Authentication Controller

---

# 📌 API Endpoints

| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| POST | `/api/Auth` | Generate JWT Token |
| GET | `/api/Emp` | Get Employee List (Protected) |
| GET | `/api/Emp/{id}` | Get Employee by Id |
| POST | `/api/Emp` | Add Employee |
| PUT | `/api/Emp/{id}` | Update Employee |
| DELETE | `/api/Emp/{id}` | Delete Employee |

---

# 🔑 Authentication Flow

### Step 1

Call

```
POST /api/Auth
```

Request Body

```json
{
  "userName": "admin",
  "password": "pwd"
}
```

---

### Step 2

API generates a JWT Token.

---

### Step 3

Click **Authorize** in Swagger.

---

### Step 4

Enter

```
Bearer <Generated JWT Token>
```

---

### Step 5

Access the protected Employee APIs.

---

# 📷 Outputs

## ✅ Output 1

JWT Token Generated Successfully

- Status Code : 200 OK
- Token returned successfully

---

## ✅ Output 2

Swagger Authorization Successful

- JWT Token entered
- Swagger Authorized

---

## ✅ Output 3

Protected API Access

```
GET /api/Emp
```

Response

```
200 OK
```

Employee data returned successfully.

---

## ✅ Output 4

Unauthorized Access

After Logout,

```
GET /api/Emp
```

Response

```
401 Unauthorized
```

---

# 📦 NuGet Packages Used

- Microsoft.AspNetCore.Authentication.JwtBearer
- Microsoft.IdentityModel.Tokens
- Swashbuckle.AspNetCore

---

# 📚 Concepts Learned

- JWT Authentication
- JWT Token Generation
- JWT Token Validation
- Claims
- Authentication Middleware
- Authorization Middleware
- Swagger JWT Configuration
- Secure Web APIs
- Bearer Authentication

---

# ✅ Result

Successfully implemented **JWT Authentication** in ASP.NET Core Web API.

The application authenticates users, generates JWT tokens, authorizes protected APIs, and prevents unauthorized access using Bearer Authentication.
