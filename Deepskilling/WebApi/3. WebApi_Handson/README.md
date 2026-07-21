# 🚀 Web API Hands-on 3 – Custom Model, Authorization Filter & Exception Filter

## 🎯 Objective

This hands-on demonstrates the implementation of a custom ASP.NET Core Web API with:

- 👨‍💼 Custom Model Classes
- 🔄 CRUD Operations
- 🔐 Custom Authorization Filter
- ⚠️ Global Exception Filter
- 📖 Swagger Integration
- 🌐 HTTP Status Codes
- 📌 API Response Documentation

---

# 🛠️ Prerequisites

Before starting this exercise, ensure you have:

- 💻 Visual Studio 2022
- ⚙️ .NET 8 SDK
- 🌐 ASP.NET Core Web API
- 📚 Swashbuckle.AspNetCore (Swagger)

---

# 📂 Project Structure

```text
3. WebApi_Handson
│
├── 📁 Controllers
│   └── EmployeeController.cs
│
├── 📁 Filters
│   ├── CustomAuthFilter.cs
│   └── CustomExceptionFilter.cs
│
├── 📁 Models
│   ├── Employee.cs
│   ├── Department.cs
│   └── Skill.cs
│
├── 📄 ExceptionLog.txt
├── 📄 Program.cs
├── 📄 appsettings.json
└── 📄 README.md
```

---

# 👨‍💼 Models Created

## Employee

- 🆔 Id
- 👤 Name
- 💰 Salary
- ✅ Permanent
- 🏢 Department
- 🛠️ Skills
- 🎂 DateOfBirth

---

## Department

- 🆔 Id
- 🏢 Name

---

## Skill

- 🆔 Id
- 🛠️ Name

---

# ✨ Features Implemented

## 📌 Custom Employee Model

✔️ Created Employee model with nested Department and Skill objects.

✔️ Implemented `GetStandardEmployeeList()`.

✔️ Returned `List<Employee>` using the GET action.

---

## 🔄 CRUD Operations

Implemented the following REST APIs:

- 📖 GET
- 🔍 GET by Id
- ➕ POST
- ✏️ PUT
- ❌ DELETE

---

## 📚 ProducesResponseType

Configured the GET action with:

- ✅ 200 OK
- ❌ 500 Internal Server Error

---

## 🔐 Custom Authorization Filter

Implemented a custom Action Filter that:

- ✅ Checks for Authorization Header.
- ✅ Validates the presence of **Bearer Token**.
- ✅ Returns

```text
400 Bad Request
```

when Authorization header is missing.

---

## ⚠️ Custom Exception Filter

Implemented a Global Exception Filter that:

- 📝 Captures unhandled exceptions.
- 📄 Writes exception details to

```text
ExceptionLog.txt
```

- 🚨 Returns

```text
500 Internal Server Error
```

to the client.

---

# 🌐 Swagger Testing

Successfully tested the APIs using Swagger UI.

✔️ GET

✔️ POST

✔️ PUT

✔️ DELETE

---

## 🔐 Authorization Filter Response

```text
400 Bad Request
Invalid request - No Auth token
```

---

## ⚠️ Exception Filter Response

```text
500 Internal Server Error
```

---

# 📸 Outputs

### 📷 Output-1

✅ Swagger displaying Employee GET API.

---

### 📷 Output-2

🔐 Authorization Filter returning

```text
400 Bad Request
```

---

### 📷 Output-3

⚠️ Exception Filter returning

```text
500 Internal Server Error
```

---

### 📷 Output-4

📝 ExceptionLog.txt generated successfully.

---

# 🎓 Learning Outcomes

After completing this hands-on, I learned to:

- ✅ Create custom Web API models.
- ✅ Implement CRUD operations.
- ✅ Work with nested model classes.
- ✅ Implement a Custom Authorization Filter.
- ✅ Implement a Global Exception Filter.
- ✅ Log exceptions into a file.
- ✅ Test APIs using Swagger.
- ✅ Document API responses using `ProducesResponseType`.

---

# 💻 Technologies Used

| Technology | Purpose |
|------------|---------|
| ⚙️ ASP.NET Core Web API | Backend API Development |
| 💻 C# | Programming Language |
| 🚀 .NET 8 | Framework |
| 📖 Swagger (Swashbuckle) | API Documentation & Testing |
| 🧰 Visual Studio 2022 | IDE |

---

# 🎉 Conclusion

This hands-on provided practical experience in building a RESTful Web API using **ASP.NET Core**, implementing **custom models**, **CRUD operations**, **Authorization Filters**, and **Global Exception Handling**. It also demonstrated effective API testing and documentation using **Swagger UI**.

⭐ Successfully Completed Web API Hands-on 3.
