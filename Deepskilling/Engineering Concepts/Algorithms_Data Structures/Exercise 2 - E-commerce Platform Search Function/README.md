# 🚀 Exercise 2 - E-commerce Platform Search Function

## 📖 Overview

This exercise demonstrates the implementation of **Linear Search** and **Binary Search** algorithms in C#. The objective is to efficiently search for products in an e-commerce platform based on their Product ID and compare the performance of different searching techniques.

---

## 🎯 Objective

To implement and analyze searching algorithms for locating products within an e-commerce inventory system.

---

## 🏗️ Scenario

An e-commerce platform maintains a collection of products. Customers often search for products using a unique Product ID.

To improve search efficiency, two search algorithms are implemented:

* Linear Search
* Binary Search

The exercise compares their approaches and highlights the advantages of Binary Search for large datasets.

---

## 🔧 Implementation Details

### Product Class

Represents a product with the following attributes:

* Product ID
* Product Name
* Category

### Linear Search

* Traverses the array sequentially.
* Compares each product's ID with the target ID.
* Returns the matching product if found.

### Binary Search

* Operates on a sorted array.
* Repeatedly divides the search space into halves.
* Provides faster search performance compared to Linear Search.

### Program Class

* Creates a sample product inventory.
* Performs both Linear Search and Binary Search.
* Displays the search results.

---

## 💡 Key Concepts Covered

| Concept                     | Description         |
| --------------------------- | ------------------- |
| Data Structures             | Arrays              |
| Searching Algorithm         | Linear Search       |
| Searching Algorithm         | Binary Search       |
| Time Complexity             | O(n) and O(log n)   |
| Object-Oriented Programming | Classes and Objects |
| Performance Analysis        | Search Optimization |

---

## 🔄 Execution Flow

1. Create product records.
2. Store products in an array.
3. Accept a target Product ID.
4. Perform Linear Search.
5. Perform Binary Search.
6. Display the matching product details.
7. Compare the efficiency of both algorithms.

---

## 📊 Complexity Analysis

| Algorithm     | Best Case | Average Case | Worst Case |
| ------------- | --------- | ------------ | ---------- |
| Linear Search | O(1)      | O(n)         | O(n)       |
| Binary Search | O(1)      | O(log n)     | O(log n)   |

### Comparison

* Linear Search checks elements one by one.
* Binary Search repeatedly divides the search space into halves.
* Binary Search is significantly faster for large sorted datasets.

---

## ✅ Result

Successfully implemented and tested both Linear Search and Binary Search algorithms in C#. The program efficiently retrieves product details using Product ID and demonstrates the performance benefits of Binary Search.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

* Linear Search Algorithm
* Binary Search Algorithm
* Time Complexity Analysis
* Search Optimization Techniques
* Object-Oriented Programming in C#
* Real-world Application of Searching Algorithms

---

## 🛠️ Technologies Used

| Technology         | Purpose                 |
| ------------------ | ----------------------- |
| C#                 | Application Development |
| .NET 10            | Runtime Framework       |
| Visual Studio 2026 | Development Environment |

---

## 📌 Conclusion

Searching algorithms play a critical role in software systems that manage large amounts of data. While Linear Search is simple to implement, Binary Search provides superior performance when working with sorted datasets, making it a preferred choice for scalable applications.

