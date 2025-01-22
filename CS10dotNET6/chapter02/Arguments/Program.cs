using static System.Console;

WriteLine($"There are {args.Length} arguments");

foreach (string arg in args)
{
  WriteLine(arg);
}

try
{
  CursorSize = int.Parse(args[2]);
}
catch (PlatformNotSupportedException)
{
  WriteLine("CursorSize not supported");
}
// change terminal text color
ForegroundColor = (ConsoleColor)Enum.Parse(
    enumType: typeof(ConsoleColor),
    value: args[0],
    ignoreCase: true);

// change terminal text background color
BackgroundColor = (ConsoleColor)Enum.Parse(
    enumType: typeof(ConsoleColor),
    value: args[1],
    ignoreCase: true);

WriteLine("New colors!!");
