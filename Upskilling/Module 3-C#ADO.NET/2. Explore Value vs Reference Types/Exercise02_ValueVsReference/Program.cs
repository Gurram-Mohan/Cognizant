using System;

namespace Exercise02_ValueVsReference
{
    class Person
    {
        public string Name { get; set; }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            // Value Type Example
            int number = 10;

            Console.WriteLine("Before modifying value type:");
            Console.WriteLine($"Number = {number}");

            ModifyValueType(number);

            Console.WriteLine("After modifying value type:");
            Console.WriteLine($"Number = {number}");


            Console.WriteLine("------------------------------");


            // Reference Type Example
            Person person = new Person();
            person.Name = "Mohan";

            Console.WriteLine("Before modifying reference type:");
            Console.WriteLine($"Name = {person.Name}");

            ModifyReferenceType(person);

            Console.WriteLine("After modifying reference type:");
            Console.WriteLine($"Name = {person.Name}");
        }


        // Method for Value Type
        static void ModifyValueType(int value)
        {
            value = 100;
        }


        // Method for Reference Type
        static void ModifyReferenceType(Person person)
        {
            person.Name = "Gurram Mohan";
        }
    }
}