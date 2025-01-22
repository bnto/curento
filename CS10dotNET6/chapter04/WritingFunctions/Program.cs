using static System.Console;

Write("Give a times table number: ");
string? s = ReadLine();

Write("Give Amount: ");
string? a = ReadLine();

Write("Give Region: ");
string? r = ReadLine();

try
{
  unchecked
  {
    byte number = byte.Parse(s);
    TimesTable(number);

    string twoLetterRegionCode = r.ToUpper();
    decimal amount = decimal.Parse(a);
    WriteLine($"You must pay {CalculateTax(amount, twoLetterRegionCode)} in tax");
  }
}
catch (Exception ex)
{
  WriteLine($"{ex.Message} Not a number?");
}

static void TimesTable(byte number)
{
  WriteLine($"This it the {number} times table:");
  for (int row = 1; row <= 12; row++)
  {
    WriteLine($"{row} x {number} = {row * number}");
  }
}

static decimal CalculateTax(decimal amount, string twoLetterRegionCode)
{
  decimal rate = 0.0M;
  switch (twoLetterRegionCode)
  {
    case "CH":
      rate = 0.08M;
      break;
    case "DK":
    case "NO":
      rate = 0.25M;
      break;
    case "GB":
    case "FR":
      rate = 0.2M;
      break;
    case "HU":
      rate = 0.27M;
      break;
    case "OR":
    case "AK":
    case "MT":
      rate = 0.0M;
      break;
    case "ND":
    case "WI":
    case "ME":
    case "VA":
      rate = 0.5M;
      break;
    case "CA":
      rate = 0.0825M;
      break;
    default:
      rate = 0.06M;
      break;
  }
  return amount * rate;
}
