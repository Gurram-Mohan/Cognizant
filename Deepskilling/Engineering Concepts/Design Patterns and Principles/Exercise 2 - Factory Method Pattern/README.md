# 🚀 Exercise 2 - Factory Method Pattern

## 📖 Overview

This exercise demonstrates the implementation of the **Factory Method Design Pattern** in C#. The Factory Method Pattern provides an interface for creating objects while allowing subclasses to decide which class to instantiate.

---

## 🎯 Objective

To design and implement a document creation system using the Factory Method Pattern, enabling the application to create different types of documents without tightly coupling the client code to specific classes.

---

## 🏗️ Scenario

A document management system needs to support multiple document types such as:

* Word Documents
* PDF Documents
* Excel Documents

Instead of directly creating objects using constructors, the Factory Method Pattern is used to delegate object creation to specialized factory classes.

---

## 🔧 Implementation Details

### Document Class

* Abstract base class.
* Defines the common operation for all document types.

### Concrete Document Classes

* WordDocument
* PdfDocument
* ExcelDocument

Each class provides its own implementation of the document behavior.

### Factory Classes

* WordFactory
* PdfFactory
* ExcelFactory

Each factory is responsible for creating a specific document type.

### Client (Program.cs)

* Uses factory objects instead of direct object creation.
* Demonstrates loose coupling and extensibility.

---

## 💡 Key Concepts Covered

| Concept         | Description                         |
| --------------- | ----------------------------------- |
| Design Pattern  | Factory Method Pattern              |
| OOP Principle   | Abstraction                         |
| OOP Principle   | Polymorphism                        |
| Object Creation | Delegated to Factories              |
| Maintainability | Reduced Coupling                    |
| Extensibility   | Easy Addition of New Document Types |

---

## 🔄 Execution Flow

1. Application starts.
2. Client requests a factory object.
3. Factory creates the appropriate document object.
4. Client interacts with the document through the abstract interface.
5. Different document types are created without changing client code.

---

## ✅ Result

Successfully implemented the Factory Method Design Pattern in C#. Different document types were created through factory classes, demonstrating abstraction, loose coupling, and extensibility.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

* Factory Method Design Pattern
* Abstract Classes
* Method Overriding
* Polymorphism
* Object Creation Abstraction
* Extensible Software Design

---

## 🛠️ Technologies Used

| Technology         | Purpose                 |
| ------------------ | ----------------------- |
| C#                 | Application Development |
| .NET 10            | Runtime Framework       |
| Visual Studio 2026 | Development Environment |

---

## 📌 Conclusion

The Factory Method Pattern promotes loose coupling by delegating object creation to factory classes. It improves maintainability and scalability by allowing new document types to be added with minimal modifications to existing code.

