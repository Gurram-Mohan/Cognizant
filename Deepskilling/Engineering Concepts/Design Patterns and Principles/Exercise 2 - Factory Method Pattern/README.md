# 🚀 Exercise 2 - Factory Method Pattern

## 📖 Overview

This exercise demonstrates the implementation of the **Factory Method Design Pattern** in Java. The Factory Method Pattern provides an interface for creating objects while allowing subclasses to determine the specific type of object that will be instantiated.

---

## 🎯 Objective

To design a flexible document management system capable of creating different types of documents without tightly coupling the client code to concrete classes.

---

## 🏗️ Scenario

A document management application needs to create multiple document types such as:

* Word Documents
* PDF Documents
* Excel Documents

Instead of directly creating objects using constructors, the Factory Method Pattern delegates object creation to specialized factory classes, improving scalability and maintainability.

---

## 🔧 Implementation Details

### Document Interface

* Defines the common behavior for all document types.
* Declares the `open()` method.

### Concrete Document Classes

#### WordDocument

* Implements the Document interface.
* Represents a Word document.

#### PdfDocument

* Implements the Document interface.
* Represents a PDF document.

#### ExcelDocument

* Implements the Document interface.
* Represents an Excel document.

### Factory Classes

#### DocumentFactory

* Abstract factory class.
* Declares the `createDocument()` method.

#### WordDocumentFactory

* Creates WordDocument objects.

#### PdfDocumentFactory

* Creates PdfDocument objects.

#### ExcelDocumentFactory

* Creates ExcelDocument objects.

### TestFactoryMethod

* Demonstrates object creation using factory classes.
* Verifies that different document types are generated correctly.

---

## 💡 Key Concepts Covered

| Concept         | Description                         |
| --------------- | ----------------------------------- |
| Design Pattern  | Factory Method Pattern              |
| OOP Principle   | Abstraction                         |
| OOP Principle   | Polymorphism                        |
| Object Creation | Factory-Based Instantiation         |
| Software Design | Loose Coupling                      |
| Extensibility   | Easy Addition of New Document Types |

---

## 🔄 Execution Flow

1. Application requests a document.
2. Appropriate factory class is selected.
3. Factory creates the required document object.
4. Client receives the object without knowing its concrete implementation.
5. Document operations are executed.

---

## ✅ Result

Successfully implemented and tested the Factory Method Design Pattern in Java. The application creates different document types through dedicated factory classes while maintaining loose coupling between object creation and usage.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

* Factory Method Design Pattern
* Abstraction and Polymorphism
* Object Creation Techniques
* Loose Coupling Principles
* Scalable Software Design
* Real-world Design Pattern Applications

