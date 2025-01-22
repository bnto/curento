# C# 10 & .net 6

## Ressources

[Github Repo](https://github.com/markjprice/cs10dotnet6.git)

## 1 Setting up the environment

- Modern dotnet: .NET 6 and .NET Core (.NET 5)
- Legacy dotnet: .NET Framework, Mono, Xamarin, .NET Standard

### Timeline

.NET Framework

- CLR Common Language Runtime - Manages code execution
- BCL Base Class Library - Library of classes to build applications
- .NET Framework 4.0+ Official Windows OS component

.NET Core, cross-platform rebrand

- CoreCLR
- CoreFX (streamlined BCL)

.NET Core (3.1) renamed with

- .NET 5 Unification of all the various .net platforms, except mobile
- .NET 6 Unified .net platform, including mobile

### Modern dotnet

ASP.NET Core:

- ASP.NET MVC
- ASP.NET Web API
- SignalR
- gRPC

Entity Framework (EF) 6

- Object-Relational mapping technology designed to work with
  - relational databases (Oracle and MS SQL Server)
  - non-relational databases (MS Azure Cosmos DB)

### Intermediate Language

The C# compiler (named Roslyn) used by the dotnet CLI tool converts the C# source code
into `IL`, Intermediate Language and stores in an assembly (a `DLL` or `EXE`)

IL code statements are executed by CoreCLR, .NET's virtual machine
The just-in-time (`JIT`) compiler compiles into native CPU instructions and is executed

Visually:

- C# -> C# compiler Roslyn -> IL stored in a DLL or EXE file
- IL -> loaded by CoreCLR, .net virtual machine -> compiled into native CPU instructions

### Create a new project

A `solution` manages multiple projects, example `/code/solution/project1`

Use `dotnet new console -f net6.0 -n HelloCS` to create a new console app named HelloCS

A solution is similar to a VSCode workspace

`.sln` Visual Studio solution file
`.code-workspace` Visual Studio Code workspace code

```bash
$ ls Chapter01*

Chapter01:
HelloCS/  TopLevelProgram/  Chapter01.sln

Chapter01-vscode:
HelloCS/  TopLevelProgram/  Chapter01.code-workspace
```

## 2 Versions of C#

Change target version of a project in `.csproj`:

`<TargetFramework>net6.0</TargetFramework>`

Add namespaces globally to a project:

```xml
<ItemGroup>
  <Using Remove="System.Threading" />
  <Using Include="System.Numerics" />
</ItemGroup>
```

Remove `<ImplicitUsings>enable</ImplicitUsings>` to disable implicit namespace import

### System.Console.WriteLine()

- Literal string
  `Console.WriteLine("Literal string will render \n as a new line");`
  `Console.WriteLine("Temperature on {0:D} is {1}°C", DateTime.Today, 23);`

- Verbatim string
  `Console.WriteLine(@"Verbatim literal will disable escape characters like \n");`

- Interpolated string
  `Console.WriteLine($"Interpolated string will give the {DateTime.Today:D}");`

### Binary

```bash
128 64 32 16 8 4 2 1
  0  0  0  0 1 0 1 0 = decimal number 10 (8+2)
```

Floating-point-arithmetic in binary notation:

```bash
128 64 32 16 8 4 2 1 - 1/2 1/4 1/8 1/16
  0  0  0  0 1 1 0 0 -   1   1   0    0 = decimal number 12.75 (8+4+1/2+1/4)
```

```cs
WriteLine($"{binaryObject:X}"); // Use hexadecimal notation
```

#### Digit seperator and Binary literals

`2_000_000` = 1 million
`0b` = binary notation `0b_0001_1110_1000_0100_1000_0000`
`0x` = hexadecimal notation `0x_001E_8480`

`int` uses 4 bytes (for whole numbers)
`double` uses 8 bytes (less accurate, don't use it to compare equality, ok for less/greater than)
`decimal` uses 16 bytes

```cs
double a = 0.1;
decimal b = 0.1M; // M suffix means a decimal literal value
```

### Declaring variables

```cs
object name = "Ryu"; // Can store any type of data
dynamic name2 = "Yoshi"; // More flexible at the cost of perf, doesn't show intellisense
string name3 = "Yoshi";

int length = ((string)name).Length; // Explicit cast expression (string)
int length2 = name2.Length; // Members can be invoked without an explicit cast
int length3 = name3.Length;

int population = 66_000_000;
double weight = 1.88;
decimal price = 4.99M;
string fruit = "Apples";
char letter = 'Z';
bool happy = true;

// Inferring the type using var

var population = 66_000_000;
var weight = 1.88;
var price = 4.99M;
var fruit = "Apples";
var letter = 'Z';
var happy = true;
```

When to use `var` and when not:

```cs
var xml1 = new XmlDocument(); // Good use of var to avoid repeated type
XmlDocument xml2 = new XmlDocument();
XmlDocument xml3 = new(); // Alternative known as target-typed new

var file1 = File.CreateText("something.txt"); // Bad use of var because type is not clear
StreamWriter file2 = File.CreateText("something.txt");
```

##### Target-typed new

```cs
class Person {
    public DateTime BirthDate;
}
Person kim = new();
kim.BirthDate = new(1967, 12, 26);
```

### Arrays

```cs
string[] names = new String[4]; // create new array of strings
names[0] = "Yoshi";

// Alternative using new[]
string[] names = new[] { "Yoshi", "", "", "" };
```

### Formatting

```cs
int numberOfApples = 12;
decimal priceOfApples = 0.35M;

Console.WriteLine(
    format: "{0} apples costs {1:C}", // C currency
    numberOfApples,
    priceOfApples * numberOfApples
    ); // Formatting using numbered positional arguments

// Formatting using interpolated strings
Console.WriteLine($"{numberOfApples} apples costs {priceOfApples * numberOfApples:C}");
```

#### Concatenation

```cs
string firstname = "Omar";
string lastname = "Rudberg";
string fullname = firstname + " " + lastname;
// since C# 10
string fullname10 = $"{firstname} {lastname}";
```

#### Alignment

```cs
Console.WriteLine(
  "{0,-10} {1,6}",
  "Name", // alignment -10 = Name...... = left aligned
  "Count", // alignment 6  =     .Count = right aligned
);
```

#### Simplifiying usage of the console

Import a static class with `using static`

```cs
using static System.Console;
WriteLine("Less text");
```

```cs
// Running the console app and providing arguments
using static System.Console;
WriteLine($"There are {args.Length} arguments");
// dotnet run [arguments]
```

## 3 Using Operators

Contolling flow, converting types, handling exceptions

### Operating on variables

`nameof` and `sizeof` operators to work with types

```cs
int age = 47;
char firstDigit = age.ToString()[0];
// = assignment operator
// . member access operator
// () invocation operator
// [] indexer access operator
```

### Pattern matching with `if` statement

`if (o is int i)` assign the value of `o` to `i` if `o` is an `int`

### Switch statement

```cs
switch (number) {
  case 1:
    WriteLine("One");
    break;
  default:
    WriteLine("Default");
    break;
}
```

Simplified version:

```cs
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
```

### `while` statement

```cs
while (x < 10) {
  x++;
}
```

### `do` statement

```cs
do {
  password = ReadLine();
} while (password != "pass123");
```

### `foreach` statement

```cs
string[] names = { "mark", "yoshi", "anna" };
foreach (string name in names){
    WriteLine(name);
}
```

### casting

Converting types is know as `casting`, and has 2 varieties: `implicit` and `explicit`

#### casting numbers

Casting

```cs
// Casting, trims the decimal point
double a = 9.8;
int b = (int)a;
WriteLine(b); // 9
```

```cs
// Converting, rounds up the value
using static System.Convert;
double a = 9.8;
int b = ToInt32(a);
WriteLine(b); // 10
```

### rounding numbers

C# uses the `Banker's Rounding`

Rounds _down_ if the decimal is less than the midpoint .5
Rounds _up_ if the decimal is more than the midpoint .5

If the decimal is the midpoint .5
rounds _up_ if the non-decimal is _odd_
rounds _down_ if the non-decumal is _even_

To use the primary school rule:

```cs
Math.Round(value: n, digits: 0, mode: MidpointRounding.AwayFromZero));
```

### Handling exceptions

```cs
if(int.TryParse(input, out int output)){
    WriteLine(output);
} else {
    WriteLine("Can't parse");
}
```

Some languages returns error codes when something goes wrong
.net throws a runtime exception
The thread is then suspended and the exception can be handled using `try-catch` statement

```cs
try {
    int age = int.Parse(input);
} catch {
    // Run this if try-block throws an exception
}

// Using exception variable declaration
try {} catch(Exception ex) {
    WriteLine($"{ex.GetType()} says {ex.Message}");
}

// Catching specific exceptions
try {
} catch(OverflowException) {
    // Too long
} catch(FormatException) {
    // Wrong format
}
```

### `checked` statement

```cs
try {
    checked {
        int x = int.MaxValue - 1;
        x++; // 2147483647
        x++; // overflow
    }
} catch (OverflowException) {
    WriteLine("The code overflowed");
}
```

### the `unchecked` statement

```cs
try {
    unchecked {
        int x = int.MaxValue + 1; //overflow
        int --; // 2147483647
    }
} catch (OverflowException) {
    WriteLine("The code overflowed");
}
```

Use `unchecked` to disable overflow checks by the compiler

## 4 Writing, Debugging and Testing

### Writing functions

```cs
static void FunctionName(type parameter){}
// static method called by the method Main
// declared with the void keyword because does not return a value to the caller
FunctionName(parameter: value); // parameter name is optional
```

### Documenting functions

```cs
/// <summary>
/// Comment about the function
/// </summary>
/// <param name="parameter">Comment about the parameters the function takes</param>
/// <returns>Comment about what is returned by the function</returns>
static void FunctionName(type parameter){}
```

```xml
<summary></summary>
<param name=""></param>
<returns></returns>
```

### Using lambdas in function implementations

Functional language important attributes:

- modularity
- immutability
- maintainability

Some features added to support a more functional approach:

- tuples
- pattern matching
- non-null reference types
- immutable objects
- expression-boides function members

#### Imperative and Functional approach

```cs
// Imperative approach
static int FibboImperative(int term)
{
  if (term == 1)
  {
    return 0;
  }
  else if (term == 2)
  {
    return 1;
  }
  else
  {
    return FibboImperative(term - 1) + FibboImperative(term - 2);
  }
}

// Functionnal approach
static int FibboFunctional(int term) => term switch
{
  1 => 0,
  2 => 1,
  _ => FibboFunctional(term - 1) + FibboFunctional(term - 2)
};
```

### Logging

`Debug` used to add logging written during development
`Trace` used to add logging written during development and runtime

`DefaultTraceListener`

### Add packages to a project

`dotnet add package Package.Name` will update the `.csproj` file

## 5 OOP

`class` and `struct` defines a type of object
a type can be seen as a blueprint or template of an object

Some concepts:

- Encapsulation
  combination of the data and actions that are related to an object
  used to control what can access/modify those actions or data
- Composition
  is about what an object is made of
- Aggregation
  is about what can be combined with an object
- Inheritance
  is about reusing code that derive from a base or superclass
  all functionality in the base cass is inherited by and becomes available in the derived class
- Abstraction
  is about capturing the core idea of an object and ignoring the details
- Polymorphism
  is about allowing a derived class to override an inherited action to provide custom behavior

### Creating a class library

`dotnet new classlib --name ProjectName`

```cs
namespace File; // File-scoped namespace declaration
public class Person { // the public keyword is an access modifier

}
```

### Inheriting from `System.Object`

note that all types ultimately inherit a special type named `System.Object`
so that a method like `ToString` can be used

we can explicitely tell the compiler that the class inherits from that type with:

```cs
// explicitely,
public class Person : System.Object {}
// simplified,
public class Person : Object {}
// or indirectly, because all types inherit this special type System.Object
public class Person {}
```

`public class derived/subclass : base/superclass {}`

class B (derived/subclass) inherits from class A (base/superclass)

### Understanding members

Members can be:

- fields, used to store data

  - constant, data that never changes
  - read-only, data that cannot be changed after the class is instantiated
  - event, data that references one or more methods

- methods, used to execute statements
  - constructor, statements execute when you use the new keyword
  - property, statements execute when you get or set data
  - indexer, statements execute when you get or set data using [] syntax
  - operator, statements execute when you use operator like + and / on operands

### Referencing an assembly

`dotnet add reference <ReferenceFolderPath>`

which will change the projects `.csproj` file with

```xml
<ItemGroup>
    <ProjectReference Include="<ReferenceFolderPath>" />
 </ItemGroup>
```

### Setting and outputting field values

```cs
// class
public class Person {
  public string Name;
  public DateTime DateOfBirth;
}

// instantiating a new class and setting field values
Person bob = new();
bob.Name = "Bob Smith";
bob.DateOfBirth = new DateTime(1965, 12, 22);

// shorthand object initializer
Person alice = new() {
    Name = "Alice Jones",
    DateOfBirth = new(1998, 3, 7)
}
```

### enum type

Efficient way of storing one or more choices

```cs
public enum WondersOfTheAncientWorld {
    GreatPyramidOfGiza,
    HangingGardensOfBabylon,
    StatueOfZeusAtOlympia,
    TempleOfArtemisAtEphesus,
    MausoleumAtHalicarnassus,
    ColossusOfRhodes,
    LighthouseOfAlexandria
}
```

the `enum` value is internally stored as an int for efficiency.

```cs
// class
public class Person {
    ...
    public WondersOfTheAncientWorld FavoriteAncientWonder;
}

bob.FavoriteAncientWonder = WondersOfTheAncientWorld.StatueOfZeusAtOlympia;
WriteLine($"{(int)bob.FavoriteAncientWonder}"); // 2
```

### `enum` with multiple values

Using the `[System.Flags]` attribute to decorate the enum type
(returns comma-seperated string when matching multiple values)

```cs
[System.Flags]
public enum WondersOfTheAncientWorld : byte {
    None = 0b_0000_0000,
    GreatPyramid = 0b_0000_0001, // 1
    HangingGardens = 0b_0000_0010, // 2
    StatueOfZeus = 0b_0000_0100, // 4
    TempleOfArtemis = 0b_0000_1000, // 8
    Mausoleum = 0b_0001_0000, // 16
    Colossus = 0b_0010_0000, // 32
    Lighthouse = 0b_0100_0000 // 64
}
```

### storing multiple values using `collections`

```cs
using Sytem.Collection.Generic;
// List<T> collection that can store an ordered collection of any type
// <> is a feature called generics, fancy term for making a collection strongly typed
// the compiler knows what kind of object can be stored, improving performance

public class Person : Object {
    // Create a new generic list/collection of Person instances, called Children
    public List<Person> Children = new List<Person>();
    // or since .NET 6.0 with target-typed new
    public List<Person> Children = new();
}

// in Program.cs, add new <Person> to the Children list/collection
bob.Children.Add(new Person { Name = "Alfred" });
bob.Children.Add(new Person { Name = "Zoe" });

// to get length of a collection: List<T>.Count
WriteLine($"{bob.Name} has {bob.Children.Count}");
```

#### `strongly` and `statically` typed

(old) `System.Collection` statically typed to contain _weakly_ typed `System.Object`
(new) `System.Collection.Generic` statically typed to contain _strongly_ typed `<T>` instances

### making a field static

```cs
// static member, same value shared across all instances

public class BankAccount {
    public string AccountName; // instance member
    public decimal Balance; // instance member

    // public static type MemberName;
    public static decimal InterestRate; // shared member
}

// in Program
BankAccount jonesAccount = new();
jonesAccount.AccountName = "Mrs. Jones";
jonesAccount.Balance = 2400;

WriteLine(
    format: "{0} earned {1:C} interest", // :C is format to use currency
    arg0: jonesAccount.AccountName,
    arg1: jonesAccount.Balance * BankAccount.InterestRate // using the static field member
);

//other members like constructors, methods, properties, etc can also be static
```

#### `const` and `readonly`

If a value of a field never changes, we can use the `const` keyword

```cs
public const string Species = "Homo Sapiens";
WriteLine($"{Person.Species}");

// note that const is not always the best choice because
// - value must be known at compile time
// - must be expressible as a literal string, Boolean or number value
// assembly must thus be recompiled

// better choice would be to mark fields as readonly
public readonly string HomePlanet = "Earth";
WriteLine($"{bob.HomePlanet}"); // notice the difference

// can also be declared as static and shared across all instances:
public static readonly string HomePlanet = "Moon";
WriteLine($"{Person.HomePlanet}"); // notice the difference
```

### constructors

Initialize fields at runtime with a constructor
A constructor is called when an instance of the class is created with the `new` keyword

```cs

// in the class file
public class Person : Object {
    public readonly DateTime Instantiated;

    public Person(){ // this is the constructor
        // set default values for fields, including readonly fields
        Name = "Unknown";
        Instantiated = DateTime.Now;
    }
}

// in the program file
Person blankPerson = new();
WriteLine($"{blankPerson.Name} was created at {blankPerson.Instanciated:hh:mm.ss}");
```

#### Encourage initial values using multiple constructors

```cs
public class Person : Object {
    public Person(string initialName, string homePlanet) {
        Name = initialName;
        HomePlanet = homePlanet;
        Instantiated = DateTime.Now;
    }
}

// in the program
Person adibou = new(initialName: "Adibou", homePlanet: "Mars");
```

### Methods

Methods are members of a type that execute block statements
(constructors are a special category of a method)

#### Returning values

- `void` : does not return a value
- `<type>` : returns a value of <type>

```cs
public class Person : Object {
    // methods
    public void WriteToConsole(){
        WriteLine($"{Name} was born on a {DateOfBirth:dddd}");
    }
    public string getOrigin(){
        return $"{Name} was born on {HomePlanet}";
    }
}

// in Program
bob.WriteToConsole();
WriteLine(bob.getOrigin());
```

#### Combining multiple returned values using `tuples`

```cs
// in the class
public class Person {
    public (string, int) GetFruit(){
        return ("Apples", 5);
    }
}

// in Program
(string, int) fruit = bob.GetFruit();
// access the tuple's fields with Item1 and Item2
WriteLine($"There are {fruit.Item2} {fruit.Item1}");

// or by naming them in the class
public (string Name, int Number) GetNamedFruit(){
    return (Name: "Apples", Number: 5);
}
// thus in Program
var fruitNamed = bob.GetNamedFruit();
// or (string Name, int Number) fruitNamed = bob.GetNamedFruit();
WriteLine($"There are {fruitNamed.Number} {fruitNamed.Name}");
```

### Inferring `tuple` names

```cs
var myTuple = ("Neville", 4);
WriteLine($"{myTuple.Item1} has {myTuple.Item2} children.");

// using tuple name inference:
var inferredTuple = (bob.Name, bob.Children.Count);
WriteLine($"{inferredTuple.Name} has {inferredTuple.Count} children");

// using a tuple variable with named fields
var tupleWithNamedFields = (string TheName: "Neville", int TheNumber: 2);
// or
(string TheName, int TheNumber) = bob.GetNamedFruit();
WriteLine($"{tupleWithNamedFields.TheName} has {tupleWithNamedFields.TheNumber} children");

// deconstructuring a tuple
(string name, int number) = bob.GetNamedFruit();
WriteLine($"{name} has {name} children");
```

#### Using `deconstructors`

```cs
// in the class
public class Person {
    public void Deconstructor(out string name, out DateTime dob, out WondersOfTheAncientWorld fav){
        name = Name;
        dob = DateOfBirth;
        fav = FavoriteAncientWonder;
    }
}

// in the program
var (name1, dob1, fav1) = bob;
WriteLine($"Deconstructed: {name1}, {dob1}, {fav1}");
```

### Passing Parameters to methods

```cs
// in the class
// method without parameter
public string SayHello(){
    return $"{Name} says hello!";
}
// method with parameter
public string SayHello(string name){
    return $"{Name} says hello {name}";
}
```

#### overloading methods

```cs
// note that methods can have the same name, see example above
// because both methods have a different signature

WriteLine(bob.SayHello());
WriteLine(bob.SayHello("Emily"));
// the LSP will tell here that the method has an additional overload
// using overloaded methods is a good practice to simplify a class by having fewer methods
```

#### optional and named parameters

```cs
public class Person {
    public string OptionalParameters(
        string command = "Run!",
        double number = 0.0,
        bool active = true
    ){
        return string.Format(
            format: "command is {0}, number is {1}, active is {2}",
            arg0: command,
            arg1: number,
            arg2: active
        );
    }
}

// in the Program

// without parameters
WriteLine(bob.OptionalParameters()); // command is Run!, number is 0, active is True

// with parameters
WriteLine(bob.OptionalParameters("Jump!", 98.5)); // command is Jump!, number is 98.5, active is True

// with named parameters
WriteLine(bob.OptionalParameters(active: false)); // command is Run!, number is 0, active is False
```

#### controlling how parameters are passed

- by _value_ : this is the default (in-only)
- by _reference_ : using the `ref` parameter (in-and-out)
- as an `out` parameter (out-only) (cannot have a default, and must be initialized inside the method)

```cs
public class Person {
    public void PassingParameters(int x, ref int y, out int z){
        z = 99; // out parameters must be initialized and cannot have a default
        x++;
        y++;
        z++;
    }
}

// in program.cs
int a = 10;
int b = 20;
int c = 30;
WriteLine($"Before: a = {a}, b = {b}, c = {c}"); // 10 20 30
bob.PassingParameters(a, ref b, out c);
WriteLine($"After: a = {a}, b = {b}, c = {c}"); // 10 21 100

// a = 10, method(10), IN : x = a = 10
// b = 20, method(ref 20), IN: y = b = 20, y++, OUT: b = y = 21
// c = 30, method(out z), OUT: z = 99, z++ = 100
```

- by value : the current value gets passed, not the variable itself, copy of the value
- by reference : a reference to the variable gets passed with the value
- with out : a reference to the variable gets passed and the value replaced

```cs
// can be simplified
// since the out variable value, here f, is not needed:
int d = 10;
int e = 20;
WriteLine($"Before: d = {d}, e = {e}, f doesn't exist");
bob.PassingParameters(d, ref e, out int f);
WriteLine($"After: d = {d}, e = {e}, f = {f}");
```

### Splitting classes with the `partial` keyword

```cs
public partial class Person {}
```

### Defining read-only properties

A `readonly` property only has the `get` implementation

`get` & `set` replaces the usual methods like getSomething(), setSomething(), etc.

```cs
public class Person {

    // using a property syntax that works with all versions
    public string Origin {
        get {
            $"{Name} was bord on {HomePlanet}";
        }
    }

    // using the lambda expression body
    public string Greeting => $"{Name} says Hello!";
    public int Age => System.DateTime.Today.Year - DateOfBirth.Year;
}

// in program.cs
Person sam == new(){
    Name = "Sam",
    DateOfBirth = new(1972, 1, 27)
};
WriteLine(sam.Origin);
WriteLine(sam.Greeting);
WriteLine(sam.Age);
```

### Defining settable properties



## 6 Interfaces and Inheriting Classes

## 7 Packaging and Distributing .NET

## 8 Working with Common .net types

## 9 Working with Files, Streams and Serialization

## 10 Working with Data (with Entity Framework Core)

## 11 Querying and Manipulating Data (with LINQ)

## 12 Improving Performance and Scalability using Multitasking

## 13 Practical Applications of C# and .net

## 14 Building Websites using asp.net Core Razor Pages

## 15 Building Websites using the MVC Pattern

## 16 Building and Consuming Web Services

## 17 Building UI using Blazor
