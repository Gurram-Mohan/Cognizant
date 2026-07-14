# 📚 Lab 3: Using EF Core CLI to Create and Apply Migrations

## 🎯 Objective

Learn how to use Entity Framework Core CLI to generate database migrations and apply them to create a SQL Server database.

---

## 🛠️ Technologies Used

- C#
- .NET 10 Console Application
- Entity Framework Core
- SQL Server LocalDB
- EF Core CLI
- Visual Studio 2022

---

## 📖 Scenario

The retail store's database needs to be created based on the entity models already defined in the application.

Entity Framework Core Migrations are used to generate the database schema and apply it to SQL Server automatically.

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
│   ├── InitialCreate.cs
│   ├── InitialCreate.Designer.cs
│   └── AppDbContextModelSnapshot.cs
│
├── Program.cs
│
└── RetailInventory.csproj
```

---

## ⚙️ Steps Performed

### 1. Installed EF Core CLI

```bash
dotnet tool install --global dotnet-ef
```

### 2. Verified Installation

```bash
dotnet ef --version
```

### 3. Created Initial Migration

```bash
dotnet ef migrations add InitialCreate
```

### 4. Applied Migration

```bash
dotnet ef database update
```

### 5. Verified Database

Opened SQL Server Management Studio (SSMS) and verified that the database and tables were created successfully.

---

## 🗄️ Database Created

**Database Name**

```
RetailInventoryDB
```

**Tables**

- Categories
- Products
- __EFMigrationsHistory

---

## 📸 Output

The output screenshot shows:

- RetailInventoryDB
- Categories table
- Products table
- __EFMigrationsHistory table

---

## ✅ Result

Successfully generated the initial migration using Entity Framework Core CLI and applied it to SQL Server, creating the RetailInventory database and required tables successfully.
