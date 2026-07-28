using System;

namespace Exercise04_TypeInference
{
    class Student
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            // Type inference using var
            var number = 100;
            var message = "Hello, C#!";

            // Target-typed new()
            Student student = new()
            {
                Name = "Mohan",
                Age = 21
            };

            Console.WriteLine("===== Type Inference using var and new() =====\n");

            Console.WriteLine($"Value : {number}");
            Console.WriteLine($"Type  : {number.GetType()}\n");

            Console.WriteLine($"Value : {message}");
            Console.WriteLine($"Type  : {message.GetType()}\n");

            Console.WriteLine($"Student Name : {student.Name}");
            Console.WriteLine($"Student Age  : {student.Age}");
            Console.WriteLine($"Type         : {student.GetType()}");
        }
    }
}