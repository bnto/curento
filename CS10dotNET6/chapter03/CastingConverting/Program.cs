using static System.Console;
using static System.Convert;

int a = 10;
double b = a;
WriteLine(b);

double c = 9.8;
int d = (int)c;
WriteLine("casting" + d);


long e = 5_000_000_000;
int f = (int)e;
WriteLine($"e is {e:N0} and f is {f:N0}");

e = long.MaxValue;
f = (int)e;
WriteLine($"e is {e:N0} and f is {f:N0}");

double g = 9.8;
int h = ToInt32(g);
WriteLine($"converting. g is {g} and h is {h}");

WriteLine("-----");

double[] doubles = new[] { 9.49, 9.5, 9.51, 10.49, 10.5, 10.51 };
foreach (double n in doubles)
{
  WriteLine($"ToInt32({n}) is {ToInt32(n)}");
  WriteLine(format:
      "Math.Round({0}, 0, MidpointRounding.AwayFromZero) is {1}",
      n,
      Math.Round(value: n, digits: 0, mode: MidpointRounding.AwayFromZero));
}

int number = 12;
WriteLine(number.ToString());

bool boolean = true;
WriteLine(boolean.ToString());

DateTime now = DateTime.Now;
WriteLine(now.ToString());

object me = new();
WriteLine(me.ToString());

byte[] binaryObject = new Byte[128];
(new Random()).NextBytes(binaryObject);
WriteLine("Binary Object as Bytes");
for (int i = 0; i < binaryObject.Length; i++)
{
  Write($"{binaryObject[i]:X}");
}
WriteLine();
string encoded = ToBase64String(binaryObject);
WriteLine($"Binary Object as Base64: {encoded}");

int age = int.Parse("27");
DateTime birthday = DateTime.Parse("4 July 1980");
WriteLine($"I was born {age} years ago");
WriteLine($"My birthday is {birthday}");
WriteLine($"My birthday is {birthday:D}");

Write("how many eggs are there? ");
string? input = ReadLine();
if (int.TryParse(input, out int count))
{
  WriteLine($"There are {count} eggs.");
}
else
{
  WriteLine("I could not parse the input");
}
