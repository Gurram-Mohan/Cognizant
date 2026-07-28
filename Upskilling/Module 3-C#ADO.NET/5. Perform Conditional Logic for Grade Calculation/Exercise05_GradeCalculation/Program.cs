using System;

namespace Exercise05_GradeCalculation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the student's score (0-100): ");
            int score = Convert.ToInt32(Console.ReadLine());

            // Validate input
            if (score < 0 || score > 100)
            {
                Console.WriteLine("Invalid score! Please enter a value between 0 and 100.");
                return;
            }

            Console.WriteLine("\n----- Using if-else -----");

            if (score >= 90)
                Console.WriteLine("Grade: A");
            else if (score >= 80)
                Console.WriteLine("Grade: B");
            else if (score >= 70)
                Console.WriteLine("Grade: C");
            else if (score >= 60)
                Console.WriteLine("Grade: D");
            else
                Console.WriteLine("Grade: F");

            Console.WriteLine("\n----- Using switch pattern matching -----");

            string grade = score switch
            {
                >= 90 and <= 100 => "A",
                >= 80 => "B",
                >= 70 => "C",
                >= 60 => "D",
                _ => "F"
            };

            Console.WriteLine($"Grade: {grade}");

            Console.ReadKey();
        }
    }
}