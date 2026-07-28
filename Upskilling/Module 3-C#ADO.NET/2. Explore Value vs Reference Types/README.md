# 🚀 Exercise 02 - Explore Value vs Reference Types

> 📚 **Module:** C# & ADO.NET  
> 🎯 **Exercise:** 02  
> 🏢 **Program:** Cognizant Upskilling

---

## 📖 Objective

The objective of this exercise is to understand the difference between **Value Types** and **Reference Types** in C# and observe how they behave when passed to methods.

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

- ✅ Creating variables using value types (`int`)
- ✅ Creating variables using reference types (custom class)
- ✅ Passing variables to methods
- ✅ Modifying values inside methods
- ✅ Comparing values before and after method execution

---

## 📂 Project Structure

```text
2. Explore Value vs Reference Types
│
└── Exercise02_ValueVsReference
    ├── Output.png
    ├── Program.cs
    ├── Exercise02_ValueVsReference.csproj
    ├── Exercise02_ValueVsReference
└── README.md
```

---

# 🧠 Concepts Covered

## 🔹 Value Types

Value types store the actual data directly.

Examples:

- `int`
- `double`
- `bool`
- `char`

When a value type is passed to a method, a **copy of the value** is created. Changes made inside the method do not affect the original variable.

Example:

```text
Original Variable
       |
       ↓
     number = 10

Method receives a copy
       |
       ↓
     value = 10
```

---

## 🔹 Reference Types

Reference types store a reference to the memory location of an object.

Examples:

- `class`
- `string`
- `array`
- `object`

When a reference type is passed to a method, the reference points to the same object. Changes made through the reference affect the original object.

Example:

```text
Reference
    |
    ↓
  Object Data
    ↑
Reference Copy
```

---

## 💻 Implementation

The program contains:

### Person Class

```csharp
class Person
{
    public string Name { get; set; }
}
```

A custom class is created to demonstrate reference type behavior.

---

### Value Type Method

```csharp
static void ModifyValueType(int value)
{
    value = 100;
}
```

The original integer value remains unchanged because only a copy is modified.

---

### Reference Type Method

```csharp
static void ModifyReferenceType(Person person)
{
    person.Name = "Gurram Mohan";
}
```

The original object is modified because both references point to the same object.

---

## ▶️ Output

```text
Before modifying value type:
Number = 10

After modifying value type:
Number = 10

------------------------------

Before modifying reference type:
Name = Mohan

After modifying reference type:
Name = Gurram Mohan
```

---

## 📊 Comparison

| Feature | Value Type | Reference Type |
|---------|------------|----------------|
| Storage | Stores actual value | Stores reference/address |
| Memory Location | Stack | Heap |
| Copy Behavior | Creates a separate copy | Copies reference |
| Original Value Change | ❌ No change | ✅ Changes |
| Examples | int, double, bool | class, string, array |

---

## 🎯 Learning Outcome

After completing this exercise, I understood:

- ✅ Difference between value types and reference types
- ✅ How data is passed to methods in C#
- ✅ How copying affects variables
- ✅ How object references work in memory
- ✅ Practical behavior of C# data types

---

## 📌 Status

🟢 **Completed Successfully**

---

<div align="center">

### 🌟 Learning C# One Exercise at a Time 🚀

</div>
