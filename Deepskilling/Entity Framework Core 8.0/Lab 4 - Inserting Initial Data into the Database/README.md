# 📚 Lab 4: Inserting Initial Data into the Database

## 🎯 Objective

Learn how to insert records into a SQL Server database using **Entity Framework Core** with asynchronous methods such as `AddRangeAsync()` and `SaveChangesAsync()`.

---

## 🛠️ Technologies Used

- C#
- .NET 10 Console Application
- Entity Framework Core
- SQL Server LocalDB
- Visual Studio 2022

---

## 📖 Scenario

The retail store manager wants to add initial product categories and products into the inventory system.

Entity Framework Core is used to insert the records into the database using asynchronous operations.

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

### 1. Created Category Objects

- Electronics
- Groceries

### 2. Added Categories

Used:

```csharp
await context.Categories.AddRangeAsync(electronics, groceries);
```

### 3. Created Product Objects

- Laptop
- Rice Bag

### 4. Added Products

Used:

```csharp
await context.Products.AddRangeAsync(product1, product2);
```

### 5. Saved Changes

Used:

```csharp
await context.SaveChangesAsync();
```

### 6. Executed the Application

```bash
dotnet run
```

### 7. Verified the Data

Opened SQL Server Management Studio (SSMS) and confirmed that the records were successfully inserted into the database.

---

## 🗄️ Data Inserted

### Categories

| Id | Name |
|----|------|
| 1 | Electronics |
| 2 | Groceries |

### Products

| Id | Name | Price | Category |
|----|--------|--------:|-----------|
| 1 | Laptop | 75000 | Electronics |
| 2 | Rice Bag | 1200 | Groceries |

---

## 📸 Output

The Output folder contains:

- ✅ Program.cs
- ✅ Console Output
- ✅ Categories Table (SSMS)
- ✅ Products Table (SSMS)

---

## 🎓 Learning Outcomes

- Understood asynchronous data insertion using Entity Framework Core.
- Used `AddRangeAsync()` to insert multiple records.
- Used `SaveChangesAsync()` to persist data into SQL Server.
- Verified inserted data using SQL Server Management Studio.
- Learned how entity relationships are maintained while inserting records.

---

## ✅ Result

Successfully inserted initial categories and products into the **RetailInventoryDB** database using Entity Framework Core asynchronous methods and verified the data in SQL Server Management Studio.
