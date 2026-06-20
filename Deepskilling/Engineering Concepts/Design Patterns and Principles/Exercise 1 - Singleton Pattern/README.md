# 🚀 Exercise 1 - Singleton Pattern

## 📖 Overview

This exercise demonstrates the implementation of the **Singleton Design Pattern** in C#. The Singleton Pattern ensures that a class has only **one instance** throughout the application's lifecycle and provides a global point of access to that instance.

---

## 🎯 Objective

To design and implement a logging utility that maintains a single shared instance across the application, ensuring consistency, controlled object creation, and efficient resource utilization.

---

## 🏗️ Scenario

In enterprise applications, creating multiple instances of a logging component can lead to inconsistent logging behavior and unnecessary memory consumption.

To overcome this challenge, the **Singleton Pattern** is used to ensure that only one `Logger` object exists and is shared across the application.

---

## 🔧 Implementation Details

### Logger Class

* Implements the Singleton Design Pattern.
* Uses a private static instance variable.
* Uses a private constructor to prevent direct object creation.
* Provides a public static `GetInstance()` method to access the single object.
* Includes a logging method to display messages.

### Program Class

* Requests the Logger instance multiple times.
* Verifies that both references point to the same object.
* Demonstrates logging operations using the shared instance.

---

## 💡 Key Concepts Covered

| Concept             | Description                |
| ------------------- | -------------------------- |
| Design Pattern      | Singleton Pattern          |
| OOP Principle       | Encapsulation              |
| Access Control      | Private Constructor        |
| Object Management   | Controlled Object Creation |
| Memory Optimization | Single Shared Instance     |
| Static Members      | Shared Instance Management |
| C# Programming      | Class and Object Design    |

---

## 🔄 Execution Flow

1. Application starts.
2. `GetInstance()` is invoked.
3. Logger instance is created only once.
4. Subsequent calls return the same instance.
5. Logging operations are performed using the shared object.
6. Instance comparison confirms Singleton behavior.

---

## ✅ Result

Successfully implemented and tested the **Singleton Design Pattern** in C#. The output confirms that only one instance of the Logger class is created and reused throughout the application.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

* Singleton Design Pattern
* Object Creation Control
* Static Members in C#
* Encapsulation
* Memory-Efficient Application Design
* Real-world Design Pattern Implementation

---

## 🛠️ Technologies Used

| Technology         | Purpose                 |
| ------------------ | ----------------------- |
| C#                 | Application Development |
| .NET 10            | Runtime Framework       |
| Visual Studio 2026 | Development Environment |

---

## 📌 Conclusion

The Singleton Pattern is one of the most widely used creational design patterns. It is particularly useful when exactly one instance of a class is required to coordinate actions across an application, such as logging, configuration management, and database connection management.

