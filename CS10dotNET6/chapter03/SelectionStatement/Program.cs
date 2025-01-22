using static System.Console;

// WriteLine();
//
// string password = "ninja";
// if (password.Length < 8)
// {
//   WriteLine("pass too short");
// }
// else
// {
//   WriteLine("pass is strong");
// }
//
// object o = "3";
// int j = 4;
// if (o is int i)
// {
//   WriteLine($"{i} x {j} = {i * j}");
// }
// else
// {
//   WriteLine("o is not an int");
// }
//
// string path = @"/tmp";
// string message;
// Stream? s;
//
// Write("Press R for read-only or W for writable: ");
// ConsoleKeyInfo key = ReadKey();
// WriteLine();
//
// if (key.Key == ConsoleKey.R)
// {
//   s = File.Open(Path.Combine(path, "file.txt"), FileMode.OpenOrCreate, FileAccess.Read);
// }
// else
// {
//   s = File.Open(Path.Combine(path, "file.txt"), FileMode.OpenOrCreate, FileAccess.Write);
// }
//
// switch (s)
// {
//   case FileStream writeableFile when s.CanWrite:
//     message = "The stream is a file that I can write to.";
//     break;
//   default:
//     message = "The stream is some other type.";
//     break;
//   case null:
//     message = "The stream is null.";
//     break;
// }
//
// WriteLine(message);

int number = 2;
string message;
message = number switch
{
  1
    => "One",
  _
    => "Default"
};

WriteLine(message);
