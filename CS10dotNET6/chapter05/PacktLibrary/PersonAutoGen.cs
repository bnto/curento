namespace Packt.Shared;

public partial class Person
{
  // read-only properties
  public string Origin {
    get {
      return $"{Name} was born on {HomePlanet}";
    }
  }
  public string Greeting => $"{Name} says Hello!";
  public int Age => System.DateTime.Today.Year - DateOfBirth.Year;


  // settable properties
  public string FavoriteIceCream { get; set; }

}
