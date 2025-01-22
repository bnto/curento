using static System.Console;

/// <summary>
/// Pass a 32-bit integer and it will be converted into
/// its ordinal equivalent
/// </summary>
/// <param name="number">Number is a cardinal value e.g. 1, 2, 3, etc.</param>
/// <returns>Number as a ordinal value e.g. 1st, 2nd, 3rd, etc.</returns>
static string CardinalToOrdinal(int number)
{
  switch (number)
  {
    case 11:
    case 12:
    case 13:
      return $"{number}th";
    default:
      int lastDigit = number % 10;
      string suffix = lastDigit switch
      {
        1 => "st",
        2 => "nd",
        3 => "rd",
        _ => "th"
      };
      return $"{number}{suffix}";
  }
}

Start:

Write("Give a number: ");
string s = ReadLine();

try
{
  int number = int.Parse(s);
  try
  {
    WriteLine($"{number}! = {Factorial(number)}");
  }
  catch (OverflowException)
  {
    WriteLine($"{number} is too big");
  }
  goto Start;
}
catch (Exception ex)
{
  WriteLine($"{ex.GetType()} {ex.Message}");
}


static void RunCardinalToOrdinal()
{
  for (int i = 1; i <= 40; i++)
  {
    Write($"{CardinalToOrdinal(i)} ");
  }
  WriteLine();
}
// RunCardinalToOrdinal();

static int Factorial(int number)
{
  if (number < 1)
  {
    return 0;

  }
  else if (number == 1)
  {
    return 1;
  }
  else
  {
    checked // for overflows
    {
      return number * Factorial(number - 1);
    }
  }
}
