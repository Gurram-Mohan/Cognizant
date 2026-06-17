# 🚀 Exercise 1 - Singleton Pattern

## 📖 Overview

This exercise demonstrates the implementation of the **Singleton Design Pattern** in Java. The Singleton Pattern ensures that a class has only **one instance** throughout the application lifecycle and provides a global access point to that instance.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🎯 Objective

To design and implement a logging utility that maintains a single shared instance across the application, ensuring consistency and efficient resource utilization.

----------

## 🏗️ Scenario

In large-scale applications, multiple logging objects can lead to inconsistent logs and unnecessary memory consumption.

To overcome this challenge, the **Singleton Pattern** is used to guarantee that only one `Logger` object exists and is shared by all components of the application.

---

## 📂 Project Structure

```text
Exercise 1 - Singleton Pattern
│
├── Logger.java
├── TestLogger.java
├── Logger.class
├── TestLogger.class
├── Output.png
└── README.md
```

---

## 🔧 Implementation Details

### Logger Class

* Private constructor prevents object creation using `new`.
* Static instance variable stores the single object.
* Public static `getInstance()` method provides controlled access.
* Includes a simple logging method for demonstration.

### TestLogger Class

* Requests the Logger instance multiple times.
* Verifies that both references point to the same object.
* Demonstrates successful logging operations.

---

## 💡 Key Concepts Covered

| Concept             | Description                |
| ------------------- | -------------------------- |
| Design Pattern      | Singleton Pattern          |
| OOP Principle       | Encapsulation              |
| Access Control      | Private Constructor        |
| Memory Optimization | Single Shared Instance     |
| Object Management   | Controlled Object Creation |

---

## 🔄 Execution Flow

1. Application starts.
2. `getInstance()` is invoked.
3. Logger instance is created only once.
4. Subsequent calls return the existing instance.
5. Logging operations are performed using the same object.

---

## 📊 Output

```text
Logger Instance Created
LOG: First log message
LOG: Second log message
Only one Logger instance exists.
```

---

## ✅ Result

Successfully implemented and tested the **Singleton Design Pattern** in Java. The output confirms that only one instance of the Logger class is created and reused throughout the application.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

* Singleton Design Pattern
* Object Creation Control
* Static Members in Java
* Memory-Efficient Design
* Real-world Design Pattern Usage

```
```
