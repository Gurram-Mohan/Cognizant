# 🛒 Lab 2 - Setting Up the Database Context for a Retail Store

## 📌 Objective

The objective of this lab is to configure **Entity Framework Core** to connect a C# application with a SQL Server database by creating entity models and a database context.

---

## 📖 Scenario

A retail store wants to maintain its inventory using a SQL Server database. The application needs to store information about products and categories.

This lab demonstrates how to:

- Create entity models
- Configure `DbContext`
- Establish a connection between the application and SQL Server using Entity Framework Core

---

## 🛠 Technologies Used

- C#
- .NET 10 Console Application
- Entity Framework Core
- SQL Server
- Visual Studio 2022

---

## 📂 Project Structure

```
RetailInventory
│
├── Models
│   ├── Category.cs
│   └── Product.cs
│
├── Data
│   └── AppDbContext.cs
│
├── Program.cs
│
└── RetailInventory.csproj
```

---

## 📋 Models Created

### 📁 Category

- Id
- Name
- Products (Navigation Property)

### 📁 Product

- Id
- Name
- Price
- CategoryId
- Category (Navigation Property)

---

## 🗄 Database Context

Created an `AppDbContext` class by inheriting from `DbContext`.

Configured:

- Product DbSet
- Category DbSet
- SQL Server Connection using `UseSqlServer()`

---

## ▶ Program Execution

The application initializes the database context and displays the following messages:

```
Retail Inventory System
Database Context Configured Successfully!
```

---

## 📸 Output

The Output folder contains:

- ✅ Solution Explorer
- ✅ Category Model
- ✅ Product Model
- ✅ AppDbContext
- ✅ Build Success
- ✅ Console Output

---

## ✅ Learning Outcomes

- Understood the purpose of `DbContext`
- Created entity models for EF Core
- Configured SQL Server connection
- Learned how EF Core maps C# classes to database tables
- Successfully initialized a database context

---

## 🎯 Result

Successfully configured **Entity Framework Core DbContext** for a Retail Inventory System and verified the application execution.

---
