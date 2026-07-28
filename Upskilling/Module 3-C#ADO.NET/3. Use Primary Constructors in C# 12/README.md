# 🚀 Exercise 03 - Use Primary Constructors in C# 12

> 📚 **Module:** C# & ADO.NET  
> 🎯 **Exercise:** 03  
> 🏢 **Program:** Cognizant Upskilling

---

## 📖 Objective

The objective of this exercise is to explore and implement **Primary Constructors in C# 12** and understand how they simplify class construction by reducing boilerplate code.

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

- ✅ Creating a class using primary constructor syntax
- ✅ Defining constructor parameters directly with the class declaration
- ✅ Using auto-implemented properties
- ✅ Creating objects using the primary constructor
- ✅ Displaying complete object information using a method

---

## 📂 Project Structure

```text
3. Use Primary Constructors in C# 12
│
└── Exercise03_PrimaryConstructors
    │
    ├── Program.cs
    ├── Exercise03_PrimaryConstructors.csproj
    └── Output.png
├── README.md
```

---

# 🧠 Concepts Covered

## 🔹 Primary Constructors

Primary constructors were introduced in **C# 12**.

They allow constructor parameters to be declared directly in the class declaration.

### Traditional Constructor:

```csharp
class Person
{
    public string Name { get; set; }

    public Person(string name)
    {
        Name = name;
    }
}
```

### Primary Constructor:

```csharp
class Person(string name)
{
}
```

This reduces unnecessary code and improves readability.

---

## 💻 Implementation

### Person Class with Primary Constructor

```csharp
class Person(string name, int age)
{
    public string Name { get; set; } = name;
    public int Age { get; set; } = age;

    public void DisplayInformation()
    {
        Console.WriteLine($"Name : {Name}");
        Console.WriteLine($"Age  : {Age}");
    }
}
```

---

## 👤 Object Creation

The object is created using the primary constructor:

```csharp
Person person = new Person("Mohan", 21);
```

The values are automatically assigned to the properties.

---

## ▶️ Output

```text
Person Details
----------------
Name : Mohan
Age  : 21
```

---

# 🎯 Learning Outcome

After completing this exercise, I understood:

- ✅ What primary constructors are in C# 12
- ✅ How they reduce constructor boilerplate code
- ✅ How to initialize class properties
- ✅ How objects are created using primary constructors
- ✅ Modern C# programming features introduced in .NET 8

---

# 💡 Interview Insights

### ❓ What are primary constructors?

Primary constructors allow constructor parameters to be declared directly in the class declaration, making class initialization simpler and cleaner.

### ❓ Which C# version introduced primary constructors?

Primary constructors were introduced in **C# 12**.

### ❓ What are the benefits?

- Cleaner syntax
- Less repetitive code
- Better readability
- Useful for dependency injection scenarios

---

## 📌 Status

🟢 **Completed Successfully**

---

<div align="center">

### 🌟 Learning C# One Exercise at a Time 🚀

</div>
