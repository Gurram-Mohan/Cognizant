# 🚀 Exercise 2 - E-commerce Platform Search Function

## 📖 Overview

This exercise focuses on implementing and analyzing search algorithms used in an e-commerce platform. Efficient search functionality is critical for quickly locating products within large datasets.

The exercise demonstrates the implementation of both **Linear Search** and **Binary Search** algorithms and compares their performance using asymptotic analysis.

---

## 🎯 Objective

To understand and implement efficient searching techniques for product retrieval and evaluate their performance using Big O notation.

---

## 🏗️ Scenario

An e-commerce platform stores thousands of products across multiple categories. Customers expect search results to be displayed instantly.

To achieve efficient product retrieval, different search algorithms are implemented and analyzed to determine the most suitable approach for large-scale systems.

---

## 🔧 Implementation Details

### Product Class

The Product class represents items available on the platform and contains:

* Product ID
* Product Name
* Category

### Linear Search

Linear Search traverses the array sequentially until the target product is found.

#### Characteristics

* Simple implementation
* No sorting required
* Suitable for small datasets

### Binary Search

Binary Search repeatedly divides the search space into halves until the desired product is located.

#### Characteristics

* Requires sorted data
* Significantly faster for large datasets
* Efficient searching mechanism

---

## 💡 Key Concepts Covered

| Concept                | Description              |
| ---------------------- | ------------------------ |
| Data Structures        | Arrays                   |
| Searching Algorithm    | Linear Search            |
| Searching Algorithm    | Binary Search            |
| Algorithm Analysis     | Big O Notation           |
| Performance Evaluation | Time Complexity          |
| Problem Solving        | Efficient Data Retrieval |

---

## 🔄 Execution Flow

1. Create Product objects.
2. Store products in an array.
3. Perform Linear Search using Product ID.
4. Perform Binary Search using Product ID.
5. Display the matching product details.
6. Compare algorithm performance.

---

## 📊 Time Complexity Analysis

| Search Algorithm | Best Case | Average Case | Worst Case |
| ---------------- | --------- | ------------ | ---------- |
| Linear Search    | O(1)      | O(n)         | O(n)       |
| Binary Search    | O(1)      | O(log n)     | O(log n)   |

---

## ⚖️ Linear Search vs Binary Search

| Feature                         | Linear Search | Binary Search   |
| ------------------------------- | ------------- | --------------- |
| Data Sorting Required           | No            | Yes             |
| Implementation Complexity       | Easy          | Moderate        |
| Performance on Large Data       | Slower        | Faster          |
| Time Complexity                 | O(n)          | O(log n)        |
| Suitable for E-commerce Systems | Limited       | Highly Suitable |

---

## 🏆 Conclusion

Binary Search is more suitable for modern e-commerce platforms because it significantly reduces search time when data is maintained in sorted order. As the number of products increases, Binary Search provides better scalability and performance compared to Linear Search.

---

## ✅ Result

Successfully implemented and analyzed Linear Search and Binary Search algorithms for an e-commerce product search system.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

* Linear Search Algorithm
* Binary Search Algorithm
* Big O Notation
* Best, Average, and Worst Case Analysis
* Performance Comparison of Algorithms
* Efficient Search Techniques for Large Datasets

