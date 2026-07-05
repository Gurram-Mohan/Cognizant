# 📧 Moq Hands-on – Unit Testing with Mock Objects

## 📖 Overview

This project demonstrates how to perform **Unit Testing** using the **Moq** framework and **NUnit** in C#. The objective is to test a mail communication module without connecting to an actual SMTP mail server by using **mock objects**.

By mocking external dependencies, the application becomes **loosely coupled**, **testable**, and **faster to execute** during testing.

---

## 🎯 Objectives

* Understand the concept of **Mocking**.
* Learn dependency injection for better testability.
* Perform unit testing without accessing external services.
* Use **Moq** to simulate the behavior of external dependencies.
* Validate application logic using **NUnit** assertions.

---

## 🛠️ Technologies Used

* C#
* .NET
* NUnit Framework
* Moq Framework
* Visual Studio

---

## 📂 Project Structure

```text
1. Moq-Handson
│
├── CustomerCommLib
│   ├── IMailSender.cs
│   ├── MailSender.cs
│   ├── CustomerComm.cs
│   └── CustomerCommLib.csproj
│
├── CustomerComm.Tests
│   ├── UnitTest1.cs
│   └── CustomerComm.Tests.csproj
│
├── README.md
└── Output.png
```

---

## 🏗️ Project Description

### CustomerCommLib

The class library contains the application's business logic.

### IMailSender

Defines the contract for sending emails.

```csharp
bool SendMail(string toAddress, string message);
```

### MailSender

Implements the `IMailSender` interface and contains the SMTP mail sending logic.

### CustomerComm

Uses dependency injection to receive an `IMailSender` object and sends email notifications to customers.

---

## 🧪 Unit Testing

A separate NUnit test project (**CustomerComm.Tests**) was created to verify the behavior of the `CustomerComm` class.

The external dependency (`IMailSender`) is replaced using a **Mock** object created with the Moq framework.

---

## 📌 NUnit Attributes Used

| Attribute               | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `[TestFixture]`         | Marks the class as a test class          |
| `[OneTimeSetUp]`        | Initializes objects before running tests |
| `[TestCase]` / `[Test]` | Defines the test method                  |
| `Assert.That()`         | Verifies the expected result             |

---

## 🔄 Mock Configuration

The mock object is configured so that:

* It accepts **any email address**.
* It accepts **any message**.
* It **always returns `true`**.

This eliminates the need for an actual SMTP server during testing.

---

## ✅ Test Scenario

**Scenario**

Verify that `SendMailToCustomer()` returns **true** when the mocked mail sender successfully sends an email.

### Expected Result

* Email sending dependency is mocked.
* Method executes successfully.
* Test passes.

---

## 📊 Test Result

| Total Tests | Passed | Failed | Skipped |
| ----------- | ------ | ------ | ------- |
| 1           | 1      | 0      | 0       |

---

## 📸 Output

Refer to **Output.png** for the successful execution result from **Visual Studio Test Explorer**.

---

## 🎓 Learning Outcomes

Through this exercise, I learned to:

* Create mock objects using the Moq framework.
* Perform isolated unit testing.
* Apply dependency injection for loosely coupled design.
* Test external service dependencies without actual execution.
* Improve application maintainability and testability.

---

## ✅ Conclusion

Using **Moq** together with **NUnit** enables efficient and reliable unit testing by isolating external dependencies. This approach improves software quality, simplifies testing, and follows modern testing best practices used in enterprise applications.

