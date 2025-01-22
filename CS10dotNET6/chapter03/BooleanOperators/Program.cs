using static System.Console;

bool a = true;
bool b = false;

WriteLine($"AND  | a     | b    ");
WriteLine($"a    | {a & a, -5} | {a & b, -5} ");
WriteLine($"b    | {a & b, -5} | {b & b, -5} ");
WriteLine();
WriteLine($"OR   | a     | b    ");
WriteLine($"a    | {a | a, -5} | {a | b, -5} ");
WriteLine($"a    | {b | a, -5} | {b | b, -5} ");
WriteLine();
WriteLine($"XOR  | a     | b    ");
WriteLine($"a    | {a ^ a, -5} | {a ^ b, -5} ");
WriteLine($"a    | {b ^ a, -5} | {b ^ b, -5} ");


WriteLine($"a & DoStuff() = {a & DoStuff()}");
WriteLine($"b & DoStuff() = {b & DoStuff()}");
WriteLine($"a && DoStuff() = {a && DoStuff()}");
WriteLine($"b && DoStuff() = {b && DoStuff()}");


static bool DoStuff(){
  WriteLine("I am doing stuff");
  return true;
}
