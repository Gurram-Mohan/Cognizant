# 🧪 NUnit Hands-on

## 📖 Overview

This project demonstrates the fundamentals of **Unit Testing** using the **NUnit Framework** in C#. The implementation validates the functionality of a Calculator class by testing its Addition method through multiple test scenarios.

---

## 🎯 Objectives

✔ Understand Unit Testing concepts

✔ Differentiate Unit Testing and Functional Testing

✔ Learn the benefits of Automated Testing

✔ Understand loosely coupled and testable design

✔ Implement NUnit attributes and assertions

✔ Create parameterized test cases using NUnit

---

## 🛠️ Technologies Used

* C#
* .NET
* NUnit Framework
* Visual Studio

---

## 🔧 Implementation Details

### Calculator Class

The Calculator class contains an Addition method:

```csharp
public int Add(int a, int b)
{
    return a + b;
}
```

---

### NUnit Attributes Used

| Attribute       | Purpose                            |
| --------------- | ---------------------------------- |
| `[TestFixture]` | Marks a class as a test class      |
| `[SetUp]`       | Executes before each test          |
| `[TearDown]`    | Executes after each test           |
| `[Test]`        | Marks a method as a test case      |
| `[TestCase]`    | Provides parameterized test inputs |

---

## 🧾 Test Cases

| Input A | Input B | Expected Result |
| ------- | ------- | --------------- |
| 10      | 20      | 30              |
| 100     | 200     | 300             |
| 5       | 15      | 20              |

---

## ▶️ Test Execution

The test cases were executed using **Visual Studio Test Explorer**.

### Test Results

✅ Total Tests: 3

✅ Passed: 3

❌ Failed: 0

⏭️ Skipped: 0

---

## 📸 Output

Refer to **Output.png** for the successful execution screenshot.

---

## 🎓 Learning Outcomes

Through this exercise, I learned:

* Writing Unit Tests using NUnit
* Using Assertions for validation
* Creating Parameterized Test Cases
* Applying Test Automation concepts
* Building reliable and maintainable applications

---

## ✅ Conclusion

The NUnit framework provides an effective way to automate testing and validate application behavior. This exercise demonstrated how automated unit tests improve software quality, reliability, and maintainability.
