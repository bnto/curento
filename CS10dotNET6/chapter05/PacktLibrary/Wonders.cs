namespace Packt.Shared;

[System.Flags]
public enum Wonders : byte
{
  None = 0b_0000_0000,
  GreatPyramid = 0b_0000_0001,
  HangingGardens = 0b_0000_0010,
  StatueOfZeus = 0b_0000_0100,
  TempleOfArtemis = 0b_0000_1000,
  Mausoleum = 0b_0001_0000,
  Colossus = 0b_0010_0000,
  Lighthouse = 0b_0100_0000
}
