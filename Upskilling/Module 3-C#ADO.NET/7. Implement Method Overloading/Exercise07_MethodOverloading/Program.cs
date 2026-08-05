using System;

namespace Exercise07_MethodOverloading
{
    internal class Program
    {
        // Method 1: Two integers
        static int CalculateTotal(int a, int b)
        {
            return a + b;
        }

        // Method 2: Three doubles
        static double CalculateTotal(double a, double b, double c)
        {
            return a + b + c;
        }

        // Method 3: Four integers
        static int CalculateTotal(int a, int b, int c, int d)
        {
            return a + b + c + d;
        }

        static void Main(string[] args)
        {
            int total1 = CalculateTotal(10, 20);

            double total2 = CalculateTotal(10.5, 20.5, 30.5);

            int total3 = CalculateTotal(5, 10, 15, 20);

            Console.WriteLine("Method Overloading Demonstration");
            Console.WriteLine("--------------------------------");

            Console.WriteLine($"Total of two integers      : {total1}");
            Console.WriteLine($"Total of three doubles     : {total2}");
            Console.WriteLine($"Total of four integers     : {total3}");

            Console.ReadKey();
        }
    }
}