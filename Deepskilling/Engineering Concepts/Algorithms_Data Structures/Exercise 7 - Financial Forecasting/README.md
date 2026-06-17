# 🚀 Exercise 7 - Financial Forecasting

## 📖 Overview

This exercise demonstrates the use of **Recursion** to perform financial forecasting based on historical growth rates. Financial forecasting helps estimate future values by repeatedly applying a growth factor over a specified period.

The implementation showcases how recursive algorithms can simplify repetitive calculations and model future financial growth effectively.

---

## 🎯 Objective

To understand and implement recursion in Java by developing a financial forecasting model that predicts future values using compound growth principles.

---

## 🏗️ Scenario

Financial institutions and businesses often forecast future investments, revenues, and market values based on historical growth trends.

In this exercise, a recursive algorithm is used to estimate future value by applying a fixed annual growth rate over a number of years.

---

## 🔧 Implementation Details

### FinancialForecast Class

The program contains:

* A recursive forecasting method.
* Base condition to terminate recursion.
* Recursive calls that apply growth repeatedly.
* Output displaying predicted future value.

### Recursive Forecast Formula

The future value is calculated by repeatedly applying:

```text id="vcg9vl"
Future Value = Current Value × (1 + Growth Rate)
```

for each forecasting period.

---

## 🔄 Recursive Execution Flow

```text id="7dd5cz"
predictFutureValue(10000, 10%, 5)

↓
predictFutureValue(11000, 10%, 4)

↓
predictFutureValue(12100, 10%, 3)

↓
predictFutureValue(13310, 10%, 2)

↓
predictFutureValue(14641, 10%, 1)

↓
predictFutureValue(16105.1, 10%, 0)

↓
Return Final Value
```

---

## 💡 Key Concepts Covered

| Concept               | Description                  |
| --------------------- | ---------------------------- |
| Recursion             | Method calling itself        |
| Base Case             | Stops recursive execution    |
| Recursive Case        | Continues problem reduction  |
| Financial Forecasting | Future value prediction      |
| Compound Growth       | Growth over multiple periods |
| Algorithm Analysis    | Complexity Evaluation        |

---

## 📊 Time Complexity Analysis

### Time Complexity

```text id="9r2g5x"
O(n)
```

where **n** represents the number of years.

Each recursive call processes one forecasting period.

### Space Complexity

```text id="0t5jjg"
O(n)
```

due to recursive call stack storage.

---

## ⚡ Optimization Techniques

The recursive solution can be optimized using:

### 1. Memoization

* Store previously calculated values.
* Prevent repeated computations.
* Improve efficiency for larger inputs.

### 2. Iterative Approach

* Replace recursive calls with loops.
* Reduce memory consumption.
* Avoid stack overflow risks.

### 3. Mathematical Computation

Use the compound growth formula directly:

```text id="m3r7vd"
Future Value = Present Value × (1 + Growth Rate)^Years
```

This provides the most efficient solution.

---

## 🏆 Conclusion

Recursion provides a clean and intuitive approach for financial forecasting by breaking the problem into smaller subproblems. While recursive solutions are easy to understand and implement, iterative and mathematical approaches are generally preferred for large-scale forecasting systems due to their improved efficiency.

---

## ✅ Result

Successfully implemented a recursive financial forecasting algorithm in Java and analyzed its computational complexity and optimization techniques.

---

## 🎓 Learning Outcome

Through this exercise, I gained practical understanding of:

* Recursive Algorithms
* Base and Recursive Cases
* Financial Forecasting Concepts
* Compound Growth Calculations
* Time and Space Complexity Analysis
* Optimization Strategies

