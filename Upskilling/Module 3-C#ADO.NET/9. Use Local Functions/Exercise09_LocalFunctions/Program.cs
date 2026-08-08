using System;

namespace Exercise09_LocalFunctions
{
    internal class Program
    {
        static int CalculateFactorial(int number)
        {
            // Local function
            int Factorial(int n)
            {
                if (n <= 1)
                {
                    return 1;
                }

                return n * Factorial(n - 1);
            }

            // Calling the local function
            return Factorial(number);
        }

        static void Main(string[] args)
        {
            Console.Write("Enter a number: ");
            int number = Convert.ToInt32(Console.ReadLine());

            int result = CalculateFactorial(number);

            Console.WriteLine($"Factorial of {number} = {result}");

            Console.ReadKey();
        }
    }
}