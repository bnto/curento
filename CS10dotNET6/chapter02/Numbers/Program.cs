// uint naturalNumber = 23;
// int integerNumber = -23;
// float realNumber = 2.3F;
// double anotherRealNumber = 2.3;

// int decimalNotation = 2_000_000;
// int binaryNotation = 0b_0001_1110_1000_0100_1000_0000;
// int hexadecimalNotation = 0x_001E_8480;
//
// Console.WriteLine(decimalNotation);
// Console.WriteLine(binaryNotation);
// Console.WriteLine(hexadecimalNotation);
//
// Console.WriteLine($"int uses {sizeof(int)} bytes and can store numbers in the range {int.MinValue:N0} to {int.MaxValue}.");
// Console.WriteLine($"int uses {sizeof(double)} bytes and can store numbers in the range {double.MinValue:N0} to {double.MaxValue}.");
// Console.WriteLine($"decimal uses {sizeof(decimal)} bytes and can store numbers in the range {decimal.MinValue:N0} to {decimal.MaxValue}.");


Console.WriteLine("Using double");
double a = 0.1;
double b = 0.2;

if (a + b == 0.3)
{
  Console.WriteLine($"{a} + {b} equals {0.3}");
}
else
{
  Console.WriteLine($"{a} + {b} doest NOT equal {0.3}");

}
Console.WriteLine("Using decimal");
decimal c = 0.1M;
decimal d = 0.2M;

if (c + d == 0.3M)
{
  Console.WriteLine($"{c} + {d} equals {0.3}");
}
else
{
  Console.WriteLine($"{c} + {d} doest NOT equal {0.3}");

}
