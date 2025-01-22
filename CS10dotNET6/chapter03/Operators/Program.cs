using static System.Console;

int a = 3;
int b = a++;

WriteLine($"a is {a}, b is {b}");

int c = 3;
int d = ++c;

WriteLine($"c is {c}, d is {d}");


int e = 11;
int f = 3;

WriteLine($"e + f is {e + f}");
WriteLine($"{e} - {f} is {e - f}");
WriteLine($"{e} * {f} is {e * f}");
WriteLine($"{e} / {f} is {e / f}");
WriteLine($"{e} % {f} is {e % f}");
