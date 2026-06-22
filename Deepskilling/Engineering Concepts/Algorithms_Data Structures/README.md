# 🚀 Exercise 7 - Financial Forecasting

## 📖 Overview

This exercise demonstrates the use of recursion to perform financial forecasting. The program predicts the future value of an investment based on a fixed annual growth rate and a specified number of years.

---

## 🎯 Objective

To implement a recursive algorithm that calculates future financial value using compound growth.

---

## 🏗️ Scenario

Financial institutions and businesses often forecast future revenue, investments, or savings using growth projections.

This exercise calculates the forecasted value by applying a fixed growth rate recursively over a number of years.

---

## 🔧 Implementation Details

### Recursive Forecast Function

The recursive method:

* Accepts current value, growth rate, and remaining years.
* Applies compound growth.
* Calls itself until the number of years becomes zero.
* Returns the final forecasted value.

### Base Case

When:

```text
years == 0
```

the recursion stops and returns the current value.

---

## 💡 Key Concepts Covered

| Concept               | Description                  |
| --------------------- | ---------------------------- |
| Recursion             | Function calling itself      |
| Base Case             | Terminates recursion         |
| Financial Forecasting | Future value prediction      |
| Compound Growth       | Repeated percentage increase |
| Time Complexity       | O(n)                         |

---

## 🔄 Execution Flow

1. Start with the initial investment value.
2. Apply annual growth rate.
3. Recursively repeat for each year.
4. Return the final forecasted value.
5. Display the result.

---

## 📊 Complexity Analysis

Time Complexity: O(n)

Space Complexity: O(n)

where n represents the number of forecast years.

---

## ✅ Result

Successfully implemented a recursive financial forecasting model in C# that predicts future investment value using compound growth.

---

## 🎓 Learning Outcome

* Recursion Fundamentals
* Base Case Design
* Financial Forecasting Logic
* Compound Interest Calculations
* Time and Space Complexity Analysis

---

## 🛠️ Technologies Used

* C#
* .NET 10
* Visual Studio 2026

---

## 📌 Conclusion

Recursion provides an elegant solution for repetitive forecasting calculations and helps in understanding divide-and-conquer style problem solving in financial applications.

