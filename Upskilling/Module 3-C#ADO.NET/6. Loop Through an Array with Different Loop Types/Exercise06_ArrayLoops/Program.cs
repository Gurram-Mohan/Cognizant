using System;

namespace Exercise06_ArrayLoops
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = { 10, 20, 30, 40, 50, 60 };

            Console.WriteLine("=== FOR LOOP ===");

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] == 30)
                {
                    Console.WriteLine("Skipping 30");
                    continue;
                }

                Console.WriteLine(numbers[i]);

                if (numbers[i] == 50)
                {
                    Console.WriteLine("Stopping at 50");
                    break;
                }
            }

            Console.WriteLine("\n=== FOREACH LOOP ===");

            foreach (int num in numbers)
            {
                if (num == 30)
                {
                    Console.WriteLine("Skipping 30");
                    continue;
                }

                Console.WriteLine(num);

                if (num == 50)
                {
                    Console.WriteLine("Stopping at 50");
                    break;
                }
            }

            Console.WriteLine("\n=== WHILE LOOP ===");

            int index = 0;

            while (index < numbers.Length)
            {
                if (numbers[index] == 30)
                {
                    Console.WriteLine("Skipping 30");
                    index++;
                    continue;
                }

                Console.WriteLine(numbers[index]);

                if (numbers[index] == 50)
                {
                    Console.WriteLine("Stopping at 50");
                    break;
                }

                index++;
            }

            Console.WriteLine("\n=== DO-WHILE LOOP ===");

            index = 0;

            do
            {
                if (numbers[index] == 30)
                {
                    Console.WriteLine("Skipping 30");
                    index++;
                    continue;
                }

                Console.WriteLine(numbers[index]);

                if (numbers[index] == 50)
                {
                    Console.WriteLine("Stopping at 50");
                    break;
                }

                index++;

            } while (index < numbers.Length);

            Console.ReadKey();
        }
    }
}