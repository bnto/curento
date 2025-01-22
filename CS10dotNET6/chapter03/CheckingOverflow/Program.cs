using static System.Console;

try
{
  unchecked
  {
    int x = int.MaxValue + 1;
    WriteLine($"{x}");
    x--;
    x--;
  }
}
catch (OverflowException)
{
  WriteLine("The code overflowed but I caught the exception.");
}
