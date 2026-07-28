# 🚀 Exercise 05 - Perform Conditional Logic for Grade Calculation

> 📚 **Module:** C# & ADO.NET  
> 🎯 **Exercise:** 05  
> 🏢 **Program:** Cognizant Upskilling

---

## 📖 Objective

The objective of this exercise is to understand and implement **conditional statements** in C#. The program accepts a student's score, evaluates it using both **if-else** and **switch pattern matching**, and displays the corresponding grade.

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

- ✅ Accepting a student's score from the user
- ✅ Using `if`, `else if`, and `else` statements
- ✅ Using `switch` pattern matching for grade calculation
- ✅ Displaying the calculated grade
- ✅ Handling different score ranges efficiently

---

## 📂 Project Structure

```text
5. Perform Conditional Logic for Grade Calculation
│
└── Exercise05_GradeCalculation
    ├── Program.cs
    ├── Exercise05_GradeCalculation.csproj
    ├── Output - 1.png
    ├── Output - 2.png
    ├── Output - 3.png
└──README.md
```

---

# 🧠 Concepts Covered

## 🔹 Conditional Statements

Conditional statements allow a program to make decisions based on specific conditions.

The following constructs are used:

- `if`
- `else if`
- `else`

These statements evaluate conditions sequentially until a matching condition is found.

---

## 🔹 Switch Pattern Matching

Modern C# supports **pattern matching** in `switch` statements, making range-based conditions cleaner and easier to read.

### Example

```csharp
score switch
{
    >= 90 and <= 100 => "A",
    >= 80 => "B",
    >= 70 => "C",
    >= 60 => "D",
    _ => "F"
};
```

Pattern matching reduces lengthy conditional logic and improves code readability.

---

# 💻 Implementation

The program performs the following steps:

1. Accepts a score from the user.
2. Calculates the grade using `if-else`.
3. Calculates the same grade using `switch` pattern matching.
4. Displays the results.

---

## ▶️ Sample Output

```text
Enter Student Score: 86

Using If-Else:
Grade = B

Using Switch Pattern Matching:
Grade = B
```

---

# 📊 Grade Criteria

| Score Range | Grade |
|-------------|-------|
| 90 – 100 | 🌟 A |
| 80 – 89 | 🎉 B |
| 70 – 79 | 👍 C |
| 60 – 69 | 📘 D |
| Below 60 | ❌ F |

---

# 🌟 Benefits of Conditional Logic

- ✅ Enables decision-making in programs
- ✅ Executes different code paths based on conditions
- ✅ Improves application flexibility
- ✅ Forms the foundation for business logic

---

# 🎯 Learning Outcome

After completing this exercise, I understood:

- ✅ How `if`, `else if`, and `else` work
- ✅ How to implement grade calculation logic
- ✅ How to use `switch` pattern matching
- ✅ The advantages of modern C# pattern matching
- ✅ How conditional statements improve program flow

---

# 💡 Interview Insights

### ❓ What is the difference between `if-else` and `switch`?

- `if-else` is suitable for complex conditions.
- `switch` provides cleaner syntax for matching specific values or ranges using pattern matching.

### ❓ What is Pattern Matching in C#?

Pattern matching allows conditions to be expressed directly within a `switch` statement, making the code shorter, cleaner, and easier to maintain.

### ❓ Why use Pattern Matching?

- ✔️ Improves readability
- ✔️ Reduces repetitive conditions
- ✔️ Simplifies range-based comparisons

---

## 📌 Status

🟢 **Completed Successfully**

---

<div align="center">

### 🌟 Learning C# One Exercise at a Time 🚀

**Keep Learning • Keep Building • Keep Growing 💙**

</div>
