using static System.Console;

WriteLine("Before parsing");
Write("What is your age? ");
string? input = ReadLine();

try
{
  if (input == null) return;

  int age = int.Parse(input);
  WriteLine($"You are {age} years old.");
}
catch (FormatException)
{
  WriteLine("The age you entered is not a valid number format");
}
catch (OverflowException)
{
  WriteLine("Number is too long");
}
catch (Exception ex)
{
  WriteLine($"{ex.GetType()} says {ex.Message}");
}
WriteLine("After parsing");

Write("Enter an amout:");
string? amount = ReadLine();
try
{
  decimal amountValue = decimal.Parse(amount);
  WriteLine($"{amountValue}");
}
catch (FormatException) when (amount.Contains("$"))
{
  WriteLine("Amounts cannot use the dolar sign!");
}
catch (FormatException)
{
  WriteLine("Amount must only contain digits!");
}
