using static System.Console;

int x = 0;
while (x < 10)
{
  WriteLine(x);
  x++;
}

// string? password;
// do
// {
//   Write("Enter your password: ");
//   password = ReadLine();
// }
// while (password != "password");
// WriteLine("ok");


for (int y = 1; y <= 10; y++)
{
  WriteLine(y);
}

string[] names = { "adam", "barry", "charlie" };
foreach (string name in names)
{
  WriteLine($"{name} has {name.Length} chars");
}
