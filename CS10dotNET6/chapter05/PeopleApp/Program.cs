using Packt.Shared;
using static System.Console;

Person bob = new();
WriteLine(bob.ToString());

bob.Name = "Bob Smith";
bob.DateOfBirth = new DateTime(1960, 12, 22);
bob.FavouriteAncientWonder = Wonders.StatueOfZeus;
bob.BucketList = Wonders.HangingGardens | Wonders.Mausoleum;

bob.Children.Add(new Person { Name = "Alfred" });
bob.Children.Add(new Person { Name = "Zoe" });

WriteLine($"{bob.Name} has {bob.Children.Count} children:");

for (int child = 0; child < bob.Children.Count; child++)
{
  WriteLine($"  - {bob.Children[child].Name}");
}

// using foreach
foreach (Person child in bob.Children)
{
  WriteLine($"  - {child.Name}");
}

WriteLine(
  format: "{0} was bord on {1:dddd, d MMMM yyyy} and is a {2}.",
  arg0: bob.Name,
  arg1: bob.DateOfBirth,
  arg2: Person.Species
);

WriteLine(
  format: "{0} was born on {1}",
  arg0: bob.Name,
  arg1: bob.HomePlanet
);

WriteLine(
  format: "{0}'s favorite wonder is {1}, and {2}",
  arg0: bob.Name,
  arg1: bob.FavouriteAncientWonder,
  // arg2: (int)bob.FavouriteAncientWonder,
  arg2: bob.BucketList
);

Person alice = new()
{
  Name = "Alice Jones",
  DateOfBirth = new(1965, 01, 20)
};

WriteLine(
  format: "{0} was bord on {1:dddd, d MMMM yyyy}",
  arg0: alice.Name,
  arg1: alice.DateOfBirth
);


BankAccount.InterestRate = 0.012M;
BankAccount jonesAccount = new();
jonesAccount.AccountName = "Mrs. Jones";
jonesAccount.Balance = 24000;

WriteLine(
  format: "{0} earned {1:C} interest",
  arg0: jonesAccount.AccountName,
  arg1: jonesAccount.Balance * BankAccount.InterestRate
);

BankAccount gerrierAccount = new();
gerrierAccount.AccountName = "Ms. Gerrier";
gerrierAccount.Balance = 98;

WriteLine(
  format: "{0} earned {1:C} interest",
  arg0: gerrierAccount.AccountName,
  arg1: gerrierAccount.Balance * BankAccount.InterestRate
);




WriteLine("---------------------------");

Person blankPerson = new();
WriteLine(
  format: "{0} of {1} was created at {2:hh:mm:ss} on a {2:dddd}.",
  arg0: blankPerson.Name,
  arg1: blankPerson.HomePlanet,
  arg2: blankPerson.Instantiated
);

Person gunny = new(initialName: "gunny", homePlanet: "Mars");
WriteLine(
  format: "{0} of {1} was created at {2:hh:mm:ss} on a {2:dddd}.",
  arg0: gunny.Name,
  arg1: gunny.HomePlanet,
  arg2: gunny.Instantiated
);

bob.WriteToConsole();
WriteLine(bob.GetOrigin());


(string, int) fruit = bob.GetFruit();
WriteLine($"There are {fruit.Item2} {fruit.Item1}");

// (string Name, int Number) fruitNamed = bob.GetNamedFruit();
var fruitNamed = bob.GetNamedFruit();
WriteLine($"There are {fruitNamed.Number} {fruitNamed.Name}");


WriteLine("---------------------------");

var thing1 = ("Neville", 4);
WriteLine($"{thing1.Item1}, has {thing1.Item2} children.");

var thing2 = (bob.Name, bob.Children.Count);
WriteLine($"{thing2.Name} has {thing2.Count} children.");

var thing3 = (Namae: "Neril", Counto: 3);
WriteLine($"{thing3.Namae} has {thing3.Counto} children.");

(string fruitName, int fruitNumber) = bob.GetFruit();
WriteLine($"{fruitName}, {fruitNumber}");


var (name1, dob1) = bob;
WriteLine($"Deconstructed: {name1}, {dob1}");

var (name2, dob2, fav2) = bob;
WriteLine($"Deconstructed: {name2}, {dob2}, {fav2}");


WriteLine("---------------------------");
WriteLine(bob.SayHello());
WriteLine(bob.SayHello("Emily"));



WriteLine("---------------------------");


WriteLine(bob.OptionalParameters());
WriteLine(bob.OptionalParameters("Jump!", 99));
WriteLine(bob.OptionalParameters(active: false));


WriteLine("---------------------------");

int a = 10;
int b = 20;
int c = 30;

WriteLine($"Before: a = {a}, b = {b}, c = {c}");
bob.PassingParameters(a, ref b, out c);
WriteLine($"After: a = {a}, b = {b}, c = {c}");



Person sam = new()
{
  Name = "Sam",
  DateOfBirth = new(1972, 1, 27)
};

WriteLine(sam.Origin);
WriteLine(sam.Greeting);
WriteLine(sam.Age);

