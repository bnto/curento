using static System.Console;
// int numberOfApples = 12;
// decimal priceOfApples = 0.35M;
// Console.WriteLine(
//     format: "{0} apples costs {1:C}",
//     numberOfApples,
//     priceOfApples * numberOfApples
//     );
//
// string applesText = "Apples";
// int applesCount = 1234;
// string bananasText = "Bananas";
// int bananasCount = 56789;
//
// Console.WriteLine(
//     "{0,-10} {1,6}",
//     "Name",
//     "Count");
// Console.WriteLine(
//     "{0,-10} {1,6:N0}",
//     applesText,
//     applesCount);
// Console.WriteLine(
//     "{0,-10} {1,6:N0}",
//     bananasText,
//     bananasCount);

// Write("First name? ");
// string? firstName = ReadLine();
// Write("Age? ");
// string? age = ReadLine();
// WriteLine($"Hello {firstName}, you look good for {age}.");

Write("Press a key ");
ConsoleKeyInfo key = ReadKey();
WriteLine(" ");
WriteLine(
    "Key: {0}, Char: {1}, Modifier: {2}",
    key.Key,
    key.KeyChar,
    key.Modifiers
    );
