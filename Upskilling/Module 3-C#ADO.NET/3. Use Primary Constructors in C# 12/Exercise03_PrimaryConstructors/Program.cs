using System;

namespace Exercise03_PrimaryConstructors
{
    class Person(string name, int age)
    {
        // Auto-implemented properties
        public string Name { get; set; } = name;
        public int Age { get; set; } = age;


        // Method to display full information
        public void DisplayInformation()
        {
            Console.WriteLine("Person Details");
            Console.WriteLine("----------------");
            Console.WriteLine($"Name : {Name}");
            Console.WriteLine($"Age  : {Age}");
        }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            // Creating object using primary constructor
            Person person = new Person("Mohan", 21);

            // Display details
            person.DisplayInformation();
        }
    }
}