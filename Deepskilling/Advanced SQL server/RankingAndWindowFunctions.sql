USE CTS_DeepSkilling;
GO

-- Remove table if it already exists
IF OBJECT_ID('Products', 'U') IS NOT NULL
DROP TABLE Products;
GO

-- Create Products Table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);
GO

-- Insert Sample Data
INSERT INTO Products VALUES
(1, 'Laptop A', 'Electronics', 80000),
(2, 'Laptop B', 'Electronics', 75000),
(3, 'Laptop C', 'Electronics', 75000),
(4, 'Mobile A', 'Electronics', 50000),

(5, 'Sofa A', 'Furniture', 40000),
(6, 'Sofa B', 'Furniture', 35000),
(7, 'Chair A', 'Furniture', 35000),
(8, 'Table A', 'Furniture', 30000),

(9, 'Shirt A', 'Clothing', 2000),
(10, 'Shirt B', 'Clothing', 1800),
(11, 'Jeans A', 'Clothing', 1800),
(12, 'Jacket A', 'Clothing', 1500);
GO

---------------------------------------------------
-- ROW_NUMBER()
---------------------------------------------------

SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER
    (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Row_Number
FROM Products;
GO

---------------------------------------------------
-- RANK()
---------------------------------------------------

SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    RANK() OVER
    (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Rank_Number
FROM Products;
GO

---------------------------------------------------
-- DENSE_RANK()
---------------------------------------------------

SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER
    (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Dense_Rank_Number
FROM Products;
GO

---------------------------------------------------
-- TOP 3 PRODUCTS PER CATEGORY
---------------------------------------------------

SELECT *
FROM
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS Row_Number
    FROM Products
) AS RankedProducts
WHERE Row_Number <= 3;
GO