using static System.Console;

// start with 0 and 1 and then always sum the previous 2 numbers
// 0 1 1 2 3 5 8 13 21 34 55 ...


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

static void RunFibbo()
{
  for (int i = 1; i <= 30; i++)
  {
    Write($"{FibboImperative(i)} ");
  }
}

RunFibbo();

static int FibboFunctional(int term) => term switch
{
  1 => 0,
  2 => 1,
  _ => FibboFunctional(term - 1) + FibboFunctional(term - 2)
};
