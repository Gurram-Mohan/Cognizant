# 🚀 Exercise 04 - Demonstrate Type Inference with `var` and `new()`

> 📚 **Module:** C# & ADO.NET  
> 🎯 **Exercise:** 04  
> 🏢 **Program:** Cognizant Upskilling

---

## 📖 Objective

The objective of this exercise is to understand **Type Inference** in C# by using the `var` keyword and **Target-Typed `new()`**. The program demonstrates how the compiler automatically determines variable types and how these features help write cleaner and more readable code.

---

## 🛠️ Tools & Technologies

| Technology | Details |
|------------|---------|
| 💻 IDE | Visual Studio Community 2022 |
| ⚙️ Framework | .NET 8.0 |
| 💙 Language | C# 12 |
| 🖥️ Application Type | Console Application |

---

## 📋 Exercise Requirements

The program demonstrates:

- ✅ Creating variables using `var`
- ✅ Creating objects using target-typed `new()`
- ✅ Displaying variable values
- ✅ Printing the inferred data types
- ✅ Understanding when type inference improves readability
- ✅ Identifying situations where explicit types are preferable

---

## 📂 Project Structure

```text
4. Demonstrate Type Inference with var and new()
│
└── Exercise04_TypeInference
    ├── Program.cs
    ├── Exercise04_TypeInference.csproj 
    ├── Output.png
└── README.md
```

---

# 🧠 Concepts Covered

## 🔹 Type Inference using `var`

The `var` keyword allows the compiler to determine the data type automatically based on the assigned value.

### Example

```csharp
var number = 100;
var message = "Hello, C#!";
```

The compiler internally treats these as:

```csharp
int number = 100;
string message = "Hello, C#!";
```

Once inferred, the variable type cannot be changed.

---

## 🔹 Target-Typed `new()`

Introduced in modern C#, target-typed `new()` eliminates redundant type names during object creation.

### Traditional Syntax

```csharp
Student student = new Student();
```

### Target-Typed `new()`

```csharp
Student student = new();
```

The compiler automatically infers the object type from the variable declaration.

---

## 💻 Implementation

### Variables Using `var`

```csharp
var number = 100;
var message = "Hello, C#!";
```

### Creating an Object Using `new()`

```csharp
Student student = new()
{
    Name = "Mohan",
    Age = 21
};
```

### Printing Types

```csharp
Console.WriteLine(number.GetType());
Console.WriteLine(message.GetType());
Console.WriteLine(student.GetType());
```

---

## ▶️ Sample Output

```text
===== Type Inference using var and new() =====

Value : 100
Type  : System.Int32

Value : Hello, C#!
Type  : System.String

Student Name : Mohan
Student Age  : 21
Type         : Exercise04_TypeInference.Student
```

---

# 📊 Comparison

| Feature | `var` | Target-Typed `new()` |
|---------|-------|----------------------|
| Purpose | Infers variable type | Infers object type |
| Introduced | C# 3.0 | C# 9.0 |
| Reduces Code | ✅ Yes | ✅ Yes |
| Compile-Time Type Safety | ✅ Yes | ✅ Yes |

---

# 🌟 Benefits of Type Inference

- ✅ Reduces repetitive code
- ✅ Improves code readability
- ✅ Makes object creation cleaner
- ✅ Helpful with long generic types
- ✅ Simplifies modern C# programming

---

# ⚠️ When to Avoid Excessive Type Inference

Type inference should be used carefully.

Avoid using `var` when:

- ❌ The variable type is not obvious.
- ❌ It reduces code readability.
- ❌ Explicit types make the code easier to understand.

Example:

```csharp
var result = GetEmployeeDetails();
```

In this case, the actual type of `result` is not immediately clear.

---

# 🎯 Learning Outcome

After completing this exercise, I understood:

- ✅ How the `var` keyword works
- ✅ How target-typed `new()` simplifies object creation
- ✅ How the compiler infers types at compile time
- ✅ The advantages and limitations of type inference
- ✅ Best practices for writing clean and readable C# code

---

# 💡 Interview Insights

### ❓ What is Type Inference?

Type inference allows the C# compiler to determine the data type automatically based on the assigned value during compilation.

### ❓ Is `var` dynamically typed?

No. The variable type is determined at compile time and cannot change later.

### ❓ What is Target-Typed `new()`?

Target-typed `new()` allows object creation without repeating the class name when the type is already known from the variable declaration.

---

## 📌 Status

🟢 **Completed Successfully**

---

<div align="center">

### 🌟 Learning C# One Exercise at a Time 🚀

**Keep Learning • Keep Building • Keep Growing 💙**

</div>
