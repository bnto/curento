using System;
using System.Collections.Generic;

namespace Packt.Shared;
public partial class Person : Object
{
  // fields
  public string Name;
  public DateTime DateOfBirth;
  public Wonders FavouriteAncientWonder;
  public Wonders BucketList;
  public List<Person> Children = new();

  public const string Species = "Homo Sapiens";
  public readonly string HomePlanet = "Earth";

  public readonly DateTime Instantiated;

  // constructors
  public Person()
  {
    Name = "Unknown";
    Instantiated = DateTime.Now;
  }

  public Person(string initialName, string homePlanet)
  {
    Name = initialName;
    HomePlanet = homePlanet;
    Instantiated = DateTime.Now;
  }

  // methods
  public void WriteToConsole()
  {
    Console.WriteLine($"{Name} was born on a {DateOfBirth:dddd}");
  }
  public string GetOrigin()
  {
    return $"{Name} was born on {HomePlanet}";
  }

  // method using tuples
  public (string, int) GetFruit()
  {
    return ("Apples", 5);
  }

  // method using named fields of a tuple
  public (string Name, int Number) GetNamedFruit()
  {
    return (Name: "Apples", Number: 5);
  }

  // deconstructed
  public void Deconstruct(out string name, out DateTime dob)
  {
    name = Name;
    dob = DateOfBirth;
  }
  public void Deconstruct(out string name, out DateTime dob, out Wonders fav)
  {
    name = Name;
    dob = DateOfBirth;
    fav = FavouriteAncientWonder;
  }

  // passing parameters to methods
  public string SayHello()
  {
    return $"{Name} says Hello!";
  }
  public string SayHello(string name)
  {
    return $"{Name} says Hello {name}!";
  }

  // optional and named parameters
  public string OptionalParameters(
      string command = "Run!",
      double number = 0.0,
      bool active = true
      )
  {
    return string.Format(
      format: "command is {0}, number is {1}, active is {2}",
      arg0: command,
      arg1: number,
      arg2: active
    );
  }

  // passing parameters by value, reference or out
  public void PassingParameters(int x, ref int y, out int z){
    z = 99;
    x++;
    y++;
    z++;
  }


  // 4 access modifiers keywords (visibility of the members)
  // private internal protected public
  // & 2 combinations
  // internal-protected private-protected
  //
  // private is the default if no explicitly applied modifier
  //
  // private member is accessible inside the type only
  // internal member is accessible inside the type and any type in the same assembly
  // protected member is accessible inside the type and any type that inherits from the type
  // public member is accessible everywhere
}

public class BankAccount
{
  public string AccountName;
  public decimal Balance;
  public static decimal InterestRate;
}

