# 📚 Lab 5: Retrieving Data from the Database

## 🎯 Objective

Learn how to retrieve data from a SQL Server database using Entity Framework Core asynchronous methods such as `ToListAsync()`, `FindAsync()`, and `FirstOrDefaultAsync()`.

---

## 🛠️ Technologies Used

- C#
- .NET 10 Console Application
- Entity Framework Core
- SQL Server LocalDB
- Visual Studio 2022

---

## 📖 Scenario

The retail store wants to display product details on the dashboard. This lab demonstrates different ways to retrieve data from the database using Entity Framework Core.

---

## 📂 Project Structure

```
RetailInventory
│
├── Data
│   └── AppDbContext.cs
│
├── Models
│   ├── Category.cs
│   └── Product.cs
│
├── Migrations
│
├── Program.cs
│
└── RetailInventory.csproj
```

---

## ⚙️ Steps Performed

### 1. Retrieved All Products

Used `ToListAsync()` to retrieve all product records.

```csharp
var products = await context.Products.ToListAsync();
```

Displayed each product using a foreach loop.

---

### 2. Retrieved Product by ID

Used `FindAsync()` to retrieve a product by its primary key.

```csharp
var product = await context.Products.FindAsync(1);
```

---

### 3. Retrieved First Matching Product

Used `FirstOrDefaultAsync()` to retrieve the first product whose price is greater than ₹50,000.

```csharp
var expensive = await context.Products
    .FirstOrDefaultAsync(p => p.Price > 50000);
```

---

### 4. Executed the Application

```bash
dotnet run
```

---

## 💻 Sample Output

```
========== ALL PRODUCTS ==========

Laptop - ₹75000
Rice Bag - ₹1200

========== FIND BY ID ==========

Found: Laptop

========== EXPENSIVE PRODUCT ==========

Expensive: Laptop
```

---

## 📸 Output

The Output folder contains:

- ✅ Program.cs
- ✅ Console Output

---

## 🎓 Learning Outcomes

- Learned how to retrieve all records using `ToListAsync()`.
- Understood how to fetch a record by primary key using `FindAsync()`.
- Learned how to retrieve the first matching record using `FirstOrDefaultAsync()`.
- Displayed retrieved data using a console application.
- Improved understanding of asynchronous database operations in Entity Framework Core.

---

## ✅ Result

Successfully retrieved product information from the **RetailInventoryDB** database using Entity Framework Core asynchronous methods and displayed the results in the console application.
