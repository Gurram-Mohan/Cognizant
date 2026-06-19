
# 🚀 Exercise 5 - Return Data from a Stored Procedure

## 📖 Overview

This exercise demonstrates how a Stored Procedure can return summarized information from a database.

The procedure calculates the total number of employees belonging to a specific department.

---

## 🎯 Objective

To create a stored procedure that returns the employee count for a given department.

---

## 🏗️ Scenario

An Employee Management System needs to generate department-wise employee statistics.

Instead of writing repetitive SQL queries, a stored procedure is used to retrieve the employee count efficiently.

---

## 🗄️ Database Tables Used

### Departments

Stores department information.

### Employees

Stores employee details including department assignments.

---

## 🔧 Stored Procedure Implemented

### sp_GetEmployeeCountByDepartment

Returns the total number of employees present in a specified department.

### Input Parameter

```sql
@DepartmentID INT
```

---

## 🔄 Execution Flow

1. Create stored procedure.
2. Accept DepartmentID as input.
3. Count employees belonging to the specified department.
4. Return the employee count.
5. Display the result.

---

## 📈 Benefits

- Reusable Database Logic
- Improved Performance
- Simplified Reporting
- Easy Maintenance

---

## ✅ Result

Successfully created and executed a stored procedure that returns the total employee count for a selected department.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

- Stored Procedures
- Aggregate Functions
- COUNT()
- Parameterized Queries
- SQL Server Programming
- Data Summarization
