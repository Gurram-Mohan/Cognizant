# 🔐 JWT Authentication Demo using ASP.NET Core Web API

## 📚 Cognizant Deep Skilling - Microservices Exercise

This project demonstrates how to implement **JWT (JSON Web Token) Authentication** in an ASP.NET Core Web API.

It covers secure authentication, role-based authorization, Swagger integration, token validation, and token expiry handling.

---

# 🚀 Technologies Used

- 💻 ASP.NET Core 8 Web API
- 🔑 JWT Authentication
- 📖 Swagger UI
- 🔒 Microsoft.AspNetCore.Authentication.JwtBearer
- 🛠 Visual Studio 2022
- ⚡ C#

---

# 📂 Project Structure

```
JwtAuthenticationDemo
│
├── Controllers
│   ├── AuthController.cs
│   └── AdminController.cs
│
├── Models
│   └── User.cs
│
├── Program.cs
├── appsettings.json
├── JwtAuthenticationDemo.http
└── README.md
```

---

# ✅ Features Implemented

### 🔹 Exercise 1 - JWT Authentication

- User Login API
- JWT Token Generation
- Swagger Integration
- Bearer Authentication

---

### 🔹 Exercise 2 - Secure API Endpoint

- Protected API using JWT
- Unauthorized users receive **401 Unauthorized**

---

### 🔹 Exercise 3 - Role-Based Authorization

- Admin Role Implementation
- Secure Admin Endpoint
- Role Validation

---

### 🔹 Exercise 4 - Token Expiry Handling

- Token Expiration Validation
- ClockSkew = TimeSpan.Zero
- Custom Header

```
Token-Expired: true
```

when JWT expires.

---

# 🔑 Default Credentials

| Username | Password |
|----------|----------|
| admin | pwd |

---

# 📌 API Endpoints

## Authenticate User

```
POST /api/Auth
```

### Request Body

```json
{
  "userName": "admin",
  "password": "pwd"
}
```

---

## Access Admin API

```
GET /api/Admin
```

Requires JWT Bearer Token.

---

# 📷 Outputs Captured

- ✅ Output-1
- ✅ Output-2
- ✅ Output-3
- ✅ Output-4
- ✅ Output-5
- ✅ Output-6
- ✅ Output-7
- ✅ Output-8
- ✅ Output-9
- ✅ Output-10

---

# 🎯 Learning Outcomes

✔ JWT Authentication

✔ JWT Token Generation

✔ Swagger Authorization

✔ Role-Based Authorization

✔ Secure API Development

✔ Token Expiry Handling

✔ ASP.NET Core Middleware

✔ Authentication & Authorization Pipeline

---

# 👨‍💻 Developed As Part Of

**Cognizant Deep Skilling Program**

Microservices Module

---

⭐ Thank you for visiting this repository!
