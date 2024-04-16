using System;

class Program
{
    const int MAX = 100;

    static int Sum(int[] arr, int n)
    {
        int result = 0;
        for (int i = 0; i < n; i++)
        {
            result += arr[i];
        }
        return result;
    }

    private static int GetValidatedInput(string prompt, int min, int max)
    {
        int number;
        do
        {
            Console.Write(prompt);
        } while (!int.TryParse(Console.ReadLine(), out number) || number < min || number > max);

        return number;
    }

    static void Main()
    {
        int n = GetValidatedInput("Enter the number of elements (1-100): ", 1, MAX);

        int[] arr = new int[n];

        Console.WriteLine($"Enter {n} integers:");
        for (int i = 0; i < n; i++)
        {
            arr[i] = GetValidatedInput($"Enter integer {i+1}: ", int.MinValue, int.MaxValue);
        }

        int total = Sum(arr, n);

        Console.WriteLine($"Sum of the numbers: {total}");
    }
}