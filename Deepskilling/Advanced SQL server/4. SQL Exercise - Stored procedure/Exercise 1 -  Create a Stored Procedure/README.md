# 🚀 Exercise 1 - Create a Stored Procedure

## 📖 Overview

This exercise demonstrates the creation and execution of SQL Stored Procedures in an Employee Management System.

Stored Procedures help encapsulate business logic, improve code reusability, and enhance database performance.

---

## 🎯 Objective

To create and execute stored procedures for:

- Retrieving employee details by department.
- Inserting a new employee record.

---

## 🏗️ Scenario

An organization maintains employee records in a centralized Employee Management System.

Stored procedures are used to simplify common database operations and improve maintainability.

---

## 🗄️ Database Schema

### Departments

| Column | Description |
|----------|-------------|
| DepartmentID | Unique Department Identifier |
| DepartmentName | Department Name |

### Employees

| Column | Description |
|----------|-------------|
| EmployeeID | Unique Employee Identifier |
| FirstName | Employee First Name |
| LastName | Employee Last Name |
| DepartmentID | Department Reference |
| Salary | Employee Salary |
| JoinDate | Joining Date |

---

## 🔧 Stored Procedures Implemented

### 1. sp_GetEmployeesByDepartment

Retrieves employee details based on DepartmentID.

#### Input Parameter

```sql
@DepartmentID INT
```

---

### 2. sp_InsertEmployee

Inserts a new employee record into the Employees table.

#### Input Parameters

```sql
@FirstName VARCHAR(50)
@LastName VARCHAR(50)
@DepartmentID INT
@Salary DECIMAL(10,2)
@JoinDate DATE
```

---

## 🔄 Execution Flow

1. Create Departments table.
2. Create Employees table.
3. Insert sample data.
4. Create retrieval stored procedure.
5. Execute retrieval procedure.
6. Create insertion stored procedure.
7. Insert new employee.
8. Verify insertion.

---

## 📈 Benefits of Stored Procedures

- Improved Performance
- Code Reusability
- Better Security
- Easier Maintenance
- Centralized Business Logic

---

## ✅ Result

Successfully created and executed stored procedures to retrieve employee information and insert employee records.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

- Stored Procedures
- Parameterized Queries
- Data Retrieval
- Data Insertion
- SQL Server Programming
- Database Management
