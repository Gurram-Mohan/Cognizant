# 🚀 Exercise 07 - Implement Method Overloading

> 📚 **Module:** C# & ADO.NET  
> 🎯 **Exercise:** 07  
> 🏢 **Program:** Cognizant Upskilling

---

## 📖 Objective

The objective of this exercise is to understand and implement **Method Overloading** in C#. Method overloading allows multiple methods to have the same name while differing in the number, type, or order of parameters. This feature improves code readability, reusability, and flexibility.

---

## 🛠️ Tools & Technologies

| Technology | Details |
|------------|---------|
| 💻 IDE | Visual Studio Community 2022 |
| ⚙️ Framework | .NET 8.0 |
| 💙 Language | C# |
| 🖥️ Application Type | Console Application |

---

## 📋 Exercise Requirements

The program demonstrates:

- ✅ Creating multiple methods with the same name
- ✅ Using different parameter types and counts
- ✅ Calling overloaded methods from `Main()`
- ✅ Displaying results for each method call
- ✅ Understanding compile-time polymorphism

---

## 📂 Project Structure

```text
7. Implement Method Overloading
│
└── Exercise07_MethodOverloading
    ├── Program.cs
    ├── Exercise07_MethodOverloading.csproj
    ├── Output.png
    └──Properties
└── README.md
```

---

# 🧠 Concepts Covered

## 🔹 Method Overloading

Method Overloading is a feature of C# that allows multiple methods to have the same name but different parameter lists.

The compiler determines which method to execute based on:

- Number of parameters
- Data types of parameters
- Order of parameters

---

## 🔹 Compile-Time Polymorphism

Method Overloading is an example of:

```text
Compile-Time Polymorphism
Static Polymorphism
```

The compiler decides which method to call during compilation.

---

# 💻 Implementation

### Method 1 – Two Integers

```csharp
static int CalculateTotal(int a, int b)
{
    return a + b;
}
```

### Method 2 – Three Doubles

```csharp
static double CalculateTotal(double a, double b, double c)
{
    return a + b + c;
}
```

### Method 3 – Four Integers

```csharp
static int CalculateTotal(int a, int b, int c, int d)
{
    return a + b + c + d;
}
```

---

## ▶️ Method Calls

```csharp
int total1 = CalculateTotal(10, 20);

double total2 = CalculateTotal(10.5, 20.5, 30.5);

int total3 = CalculateTotal(5, 10, 15, 20);
```

The compiler automatically selects the appropriate overloaded method.

---

## ▶️ Sample Output

```text
Method Overloading Demonstration
--------------------------------
Total of two integers      : 30
Total of three doubles     : 61.5
Total of four integers     : 50
```

---

# 📊 Overloaded Methods Comparison

| Method Signature | Purpose |
|------------------|---------|
| CalculateTotal(int, int) | Adds two integers |
| CalculateTotal(double, double, double) | Adds three double values |
| CalculateTotal(int, int, int, int) | Adds four integers |

---

# 🌟 Advantages of Method Overloading

- ✅ Improves code readability
- ✅ Enhances code reusability
- ✅ Reduces the need for multiple method names
- ✅ Supports compile-time polymorphism
- ✅ Makes APIs easier to use

---

# 🎯 Learning Outcome

After completing this exercise, I understood:

- ✅ What Method Overloading is
- ✅ How methods can share the same name
- ✅ How the compiler selects overloaded methods
- ✅ The concept of compile-time polymorphism
- ✅ Best practices for designing reusable methods

---

# 💡 Interview Insights

### ❓ What is Method Overloading?

Method Overloading allows multiple methods with the same name to exist in a class, provided their parameter lists are different.

---

### ❓ Is Method Overloading Runtime or Compile-Time Polymorphism?

✅ Compile-Time Polymorphism

The method to execute is determined during compilation.

---

### ❓ Can methods be overloaded by changing only the return type?

❌ No.

The following is invalid:

```csharp
int CalculateTotal(int a, int b)

double CalculateTotal(int a, int b)
```

Because both methods have identical parameter lists.

---

### ❓ How can methods be overloaded?

- Different number of parameters
- Different parameter types
- Different parameter order

---

## 📌 Status

🟢 **Completed Successfully**

---

<div align="center">

### 🌟 Learning C# One Exercise at a Time 🚀

**Keep Learning • Keep Building • Keep Growing 💙**

</div>
