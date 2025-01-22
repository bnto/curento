using static System.Console;

int a = 10; //   0  0  0  0   1 0 1 0 = 8 + 2
            // 128 64 32 16   8 4 2 1
int b = 6;  //   0  0  0  0   0 1 1 0 = 4 + 2

WriteLine($"a = {a}");
WriteLine($"b = {b}");

// AND Operator
// a AND b
// 1010
// 0110
// ----
// 0010 = 0 + 0 + 2 + 0
WriteLine($"a & b = {a & b}"); // 2

// OR Operator
// a OR b
// 1010
// 0110
// ----
// 1110 = 8 + 4 + 2 + 0 = 14
WriteLine($"a | b = {a | b}"); // 14

// XOR Operator
// a XOR b
// 1010
// 0110
// ----
// 1100 = 8 + 4 + 0 + 0 = 12
WriteLine($"a ^ b = {a ^ b}"); // 12

// left shift operator
// by 3: 00001010 -> 01010000 = 0 64 0 16 = 80 equivalent to multiply by 8
WriteLine($"a << 3 = {a << 3}");

// right shift operator
// by one: 00000110 -> 00000011 = 0 0 2 1 = 3
WriteLine($"b >> 1 = {b >> 1}");


static string ToBinaryString(int value)
{
  return Convert.ToString(value, toBase: 2).PadLeft(8, '0');
}

WriteLine();
WriteLine("Output as binary");
WriteLine($"    a = {ToBinaryString(a)} : 10");
WriteLine($"    b = {ToBinaryString(b)} : 6");
WriteLine($"a & b = {ToBinaryString(a & b)} : 2");
WriteLine($"a | b = {ToBinaryString(a | b)} : 14");
WriteLine($"a ^ b = {ToBinaryString(a ^ b)} : 12");
