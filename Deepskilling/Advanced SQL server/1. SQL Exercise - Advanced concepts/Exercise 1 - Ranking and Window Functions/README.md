# 🚀 Exercise 1 - Ranking and Window Functions

## 📖 Overview

This exercise demonstrates the use of SQL Window Functions to rank products within each category based on their prices. Window functions allow calculations across related rows without grouping the data.

---

## 🎯 Objective

To identify the top 3 most expensive products in each category using:

- ROW_NUMBER()
- RANK()
- DENSE_RANK()
- OVER()
- PARTITION BY

---

## 🏗️ Scenario

An e-commerce platform wants to analyze its product catalog and identify the most expensive products within each category.

Ranking functions help compare products while handling ties in different ways.

---

## 🔧 Implementation Details

### Products Table

The table contains:

| Column | Description |
|----------|-------------|
| ProductID | Unique product identifier |
| ProductName | Product name |
| Category | Product category |
| Price | Product price |

---

## 📊 Window Functions Used

### ROW_NUMBER()

Assigns a unique sequential number to each row within a category.

### RANK()

Assigns the same rank to tied values and skips subsequent ranks.

### DENSE_RANK()

Assigns the same rank to tied values without skipping ranks.

### PARTITION BY

Divides data into category-wise groups before ranking.

### ORDER BY Price DESC

Ranks products from highest to lowest price.

---

## 🔄 Execution Flow

1. Create Products table.
2. Insert sample product data.
3. Apply ROW_NUMBER().
4. Apply RANK().
5. Apply DENSE_RANK().
6. Retrieve the top 3 expensive products from each category.

---

## 📈 Time Complexity

| Operation | Complexity |
|------------|------------|
| Ranking Functions | O(n log n) |
| Partitioning and Sorting | O(n log n) |

---

## ✅ Result

Successfully ranked products within each category and identified the top 3 most expensive products using SQL Window Functions.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

- SQL Window Functions
- ROW_NUMBER()
- RANK()
- DENSE_RANK()
- OVER Clause
- PARTITION BY
- Category-wise Ranking
- Query Optimization Concepts




























