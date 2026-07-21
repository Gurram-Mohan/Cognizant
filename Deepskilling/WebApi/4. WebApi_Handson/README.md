# 🚀 Web API Hands-on 4 – CRUD Update Operation using ASP.NET Core Web API

## 🎯 Objective

This hands-on demonstrates the implementation of **Update (PUT)** operation in an ASP.NET Core Web API.

The exercise focuses on:

- ✨ Updating Employee data
- 📥 Using the **FromBody** attribute
- 🔄 CRUD (Update) operation
- ✅ Input Validation
- 🚫 Returning appropriate HTTP Status Codes
- 🧪 Testing APIs using Swagger

---

# 🛠️ Prerequisites

Before starting this exercise, ensure you have:

- 💻 Visual Studio 2022
- ⚙️ .NET 8 SDK
- 🌐 ASP.NET Core Web API
- 📚 Swagger (Swashbuckle.AspNetCore)

---

# 📂 Project Structure

```text
4. WebApi_Handson
│
├── 📁 Controllers
│   └── EmployeeController.cs
│
├── 📁 Models
│   ├── Employee.cs
│   ├── Department.cs
│   └── Skill.cs
│
├── 📄 Program.cs
├── 📄 appsettings.json
├── 📄 README.md
│
└── 📁 Outputs
    ├── Output-1.png
    ├── Output-2.png
    ├── Output-3.png
    └── Output-4.png
```

---

# ✨ Features Implemented

## 👨‍💼 Employee Update API

Implemented **PUT** operation to update employee details.

### Endpoint

```
PUT /api/Emp/{id}
```

---

## 📥 FromBody Attribute

Used

```csharp
[FromBody] Employee employee
```

to receive Employee details from the request body.

---

## ✅ Validation Implemented

### Case 1

If

```text
id <= 0
```

Returns

```text
400 Bad Request
```

Message

```text
Invalid employee id
```

---

### Case 2

If employee does not exist

Returns

```text
400 Bad Request
```

Message

```text
Invalid employee id
```

---

### Case 3

If employee exists

✔ Employee details are updated.

✔ Updated Employee object is returned.

---

# 🌐 Swagger Testing

Successfully tested using Swagger UI.

### ✔ Test 1

Retrieve Employee List

```
GET /api/Emp
```

Response

```
200 OK
```

---

### ✔ Test 2

Update Existing Employee

```
PUT /api/Emp/1
```

Response

```
200 OK
```

Updated employee information returned successfully.

---

### ✔ Test 3

Invalid Employee ID

```
PUT /api/Emp/0
```

Response

```
400 Bad Request
```

Message

```
Invalid employee id
```

---

### ✔ Test 4

Non-existing Employee

```
PUT /api/Emp/100
```

Response

```
400 Bad Request
```

Message

```
Invalid employee id
```

---

# 📸 Outputs

### 📷 Output-1

Employee List retrieved successfully.

---

### 📷 Output-2

Employee updated successfully using PUT.

---

### 📷 Output-3

Validation for Invalid Employee ID.

```
400 Bad Request
```

---

### 📷 Output-4

Validation for Non-existing Employee ID.

```
400 Bad Request
```

---

# 🎓 Learning Outcomes

After completing this hands-on, I learned to:

- ✅ Implement Update (PUT) operation.
- ✅ Use the **FromBody** attribute.
- ✅ Update hardcoded employee data.
- ✅ Validate incoming requests.
- ✅ Return appropriate HTTP status codes.
- ✅ Test REST APIs using Swagger.
- ✅ Understand CRUD Update operations in ASP.NET Core Web API.

---

# 💻 Technologies Used

| Technology | Purpose |
|------------|---------|
| ⚙️ ASP.NET Core Web API | Backend API Development |
| 💻 C# | Programming Language |
| 🚀 .NET 8 | Framework |
| 📖 Swagger | API Documentation & Testing |
| 🧰 Visual Studio 2022 | IDE |

---

# 🎉 Conclusion

This hands-on provided practical experience in implementing the **Update (PUT)** operation in an ASP.NET Core Web API. It covered request validation, model binding using **FromBody**, appropriate HTTP responses, and API testing with Swagger.

⭐ Successfully Completed Web API Hands-on 4.
