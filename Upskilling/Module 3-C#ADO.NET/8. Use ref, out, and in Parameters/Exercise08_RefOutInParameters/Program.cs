using System;

namespace Exercise08_RefOutInParameters
{
    internal class Program
    {
        // Method using ref
        static void ModifyWithRef(ref int number)
        {
            number += 50;
        }

        // Method using out
        static void GenerateValue(out int number)
        {
            number = 100;
        }

        // Method using in
        static void DisplayValue(in int number)
        {
            Console.WriteLine($"Value received using 'in': {number}");

            // Not allowed:
            // number = 200;
        }

        static void Main(string[] args)
        {
            // ref example
            int refValue = 10;

            Console.WriteLine("=== REF PARAMETER ===");
            Console.WriteLine($"Before method call: {refValue}");

            ModifyWithRef(ref refValue);

            Console.WriteLine($"After method call : {refValue}");

            Console.WriteLine();

            // out example
            Console.WriteLine("=== OUT PARAMETER ===");

            int outValue;

            GenerateValue(out outValue);

            Console.WriteLine($"Value after method call: {outValue}");

            Console.WriteLine();

            // in example
            Console.WriteLine("=== IN PARAMETER ===");

            int inValue = 500;

            Console.WriteLine($"Before method call: {inValue}");

            DisplayValue(in inValue);

            Console.WriteLine($"After method call : {inValue}");

            Console.ReadKey();
        }
    }
}