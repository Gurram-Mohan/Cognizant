# 🚀 Exercise 06 - Loop Through an Array with Different Loop Types

> 📚 **Module:** C# & ADO.NET  
> 🎯 **Exercise:** 06  
> 🏢 **Program:** Cognizant Upskilling

---

## 📖 Objective

The objective of this exercise is to practice iterating through arrays using different looping constructs available in C#. The program demonstrates how to traverse an array using **for**, **foreach**, **while**, and **do-while** loops while applying conditional logic using **break** and **continue** statements.

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

- ✅ Declaring an integer array with multiple elements
- ✅ Iterating through the array using a `for` loop
- ✅ Iterating through the array using a `foreach` loop
- ✅ Iterating through the array using a `while` loop
- ✅ Iterating through the array using a `do-while` loop
- ✅ Using `continue` to skip specific values
- ✅ Using `break` to stop loop execution

---

## 📂 Project Structure

```text
6. Loop Through an Array with Different Loop Types
│
└── Exercise06_ArrayLoops
    ├── Program.cs
    ├── Exercise06_ArrayLoops.csproj
    └── Properties
└── README.md
```

---

# 🧠 Concepts Covered

## 🔹 Array

An array is a collection of elements of the same data type stored in contiguous memory locations.

```csharp
int[] numbers = { 10, 20, 30, 40, 50, 60 };
```

---

## 🔹 for Loop

The `for` loop is commonly used when the number of iterations is known.

```csharp
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}
```

### Advantages

- Easy access to array indexes
- Suitable for fixed iterations
- Flexible loop control

---

## 🔹 foreach Loop

The `foreach` loop directly accesses elements without using indexes.

```csharp
foreach (int num in numbers)
{
    Console.WriteLine(num);
}
```

### Advantages

- Cleaner syntax
- Less error-prone
- Best for read-only traversal

---

## 🔹 while Loop

The `while` loop executes as long as the specified condition remains true.

```csharp
while (index < numbers.Length)
{
    Console.WriteLine(numbers[index]);
    index++;
}
```

### Advantages

- Useful when iteration count is unknown
- Condition-controlled looping

---

## 🔹 do-while Loop

The `do-while` loop executes at least once before checking the condition.

```csharp
do
{
    Console.WriteLine(numbers[index]);
    index++;
}
while (index < numbers.Length);
```

### Advantages

- Guaranteed first execution
- Useful for menu-driven applications

---

## 🔹 continue Statement

The `continue` statement skips the current iteration and moves to the next iteration.

```csharp
if (num == 30)
{
    continue;
}
```

### Example

```text
Skipping 30
```

---

## 🔹 break Statement

The `break` statement immediately terminates the loop.

```csharp
if (num == 50)
{
    break;
}
```

### Example

```text
Stopping at 50
```

---

# 💻 Implementation Highlights

### Array Declaration

```csharp
int[] numbers = { 10, 20, 30, 40, 50, 60 };
```

### Skip Condition

```csharp
if (num == 30)
{
    continue;
}
```

### Stop Condition

```csharp
if (num == 50)
{
    break;
}
```

---

## ▶️ Sample Output

```text
=== FOR LOOP ===
10
20
Skipping 30
40
50
Stopping at 50

=== FOREACH LOOP ===
10
20
Skipping 30
40
50
Stopping at 50

=== WHILE LOOP ===
10
20
Skipping 30
40
50
Stopping at 50

=== DO-WHILE LOOP ===
10
20
Skipping 30
40
50
Stopping at 50
```

---

# 📊 Loop Comparison

| Loop Type | Uses Index | Executes At Least Once | Best Use Case |
|------------|------------|------------------------|---------------|
| for | ✅ Yes | ❌ No | Known iteration count |
| foreach | ❌ No | ❌ No | Collection traversal |
| while | Optional | ❌ No | Condition-based looping |
| do-while | Optional | ✅ Yes | At least one execution required |

---

# 🌟 Benefits of Loops

- ✅ Reduce repetitive code
- ✅ Improve code efficiency
- ✅ Enable collection processing
- ✅ Simplify data traversal
- ✅ Enhance program flexibility

---

# 🎯 Learning Outcome

After completing this exercise, I understood:

- ✅ How arrays store multiple values
- ✅ How to iterate using different loop types
- ✅ When to use `for`, `foreach`, `while`, and `do-while`
- ✅ How `continue` skips iterations
- ✅ How `break` terminates loops
- ✅ Best practices for array traversal

---

# 💡 Interview Insights

### ❓ What is the difference between `for` and `foreach`?

- `for` uses indexes and provides more control.
- `foreach` directly accesses elements and is easier to read.

### ❓ What is the difference between `while` and `do-while`?

- `while` checks the condition before execution.
- `do-while` executes once before checking the condition.

### ❓ What does `continue` do?

It skips the remaining statements in the current iteration and moves to the next iteration.

### ❓ What does `break` do?

It immediately exits the loop regardless of the remaining iterations.

---

## 📌 Status

🟢 **Completed Successfully**

---

<div align="center">

### 🌟 Learning C# One Exercise at a Time 🚀

**Keep Learning • Keep Building • Keep Growing 💙**

</div>
