using System;

namespace EcommerceSearchExample
{
    internal class Program
    {
        static Product LinearSearch(Product[] products, int targetId)
        {
            foreach (Product product in products)
            {
                if (product.ProductId == targetId)
                    return product;
            }

            return null;
        }

        static Product BinarySearch(Product[] products, int targetId)
        {
            int left = 0;
            int right = products.Length - 1;

            while (left <= right)
            {
                int mid = (left + right) / 2;

                if (products[mid].ProductId == targetId)
                    return products[mid];

                if (products[mid].ProductId < targetId)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return null;
        }

        static void Main(string[] args)
        {
            Product[] products =
            {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Headphones", "Accessories"),
                new Product(104, "Keyboard", "Accessories"),
                new Product(105, "Mouse", "Accessories")
            };

            int targetId = 103;

            Console.WriteLine("=== Linear Search ===");

            Product linearResult = LinearSearch(products, targetId);

            if (linearResult != null)
            {
                Console.WriteLine(
                    $"Product Found: {linearResult.ProductName} ({linearResult.Category})");
            }

            Console.WriteLine();

            Console.WriteLine("=== Binary Search ===");

            Product binaryResult = BinarySearch(products, targetId);

            if (binaryResult != null)
            {
                Console.WriteLine(
                    $"Product Found: {binaryResult.ProductName} ({binaryResult.Category})");
            }

            Console.WriteLine();
            Console.WriteLine("Search Completed Successfully");

            Console.ReadKey();
        }
    }
}