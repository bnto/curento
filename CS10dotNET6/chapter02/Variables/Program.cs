using System.Xml;

object name = "Ryu";
dynamic name2 = "Yoshi";
string name3 = "Yoshi";

int length = ((string)name).Length;
int length2 = name2.Length;
int length3 = name3.Length;

Console.WriteLine($"{name} has {length} chars");
Console.WriteLine($"{name2} has {length2} chars");
Console.WriteLine($"{name3} has {length3} chars");


var population = 66_000_000;
var weight = 1.88;
var price = 4.99M;
var fruit = "Apples";
var letter = 'Z';
var happy = true;

Console.WriteLine($"{population}{weight}{price}{fruit}{letter}{happy}");

var xml1 = new XmlDocument();
XmlDocument xml2 = new XmlDocument();

var file1 = File.CreateText("something.txt");
StreamWriter file2 = File.CreateText("something.txt");

Console.WriteLine($"{default(bool)}");
Console.WriteLine($"{default(DateTime)}");
Console.WriteLine($"{default(String)}");



// string[] names;
// names = new String[4];
// string[] names = new[] { "test" };
string[] names = new String[4];

for (int i = 0; i < names.Length; i++)
{
  Console.WriteLine(names[i]);
}



