# functions and methods
# from math import sqrt

# functions
print("a value")  # this is a function
print(input("ask for value "))

# methods (functions of datatypes)
print("value".upper())
print("VALUE".lower())
print("value".replace("e", "3"))

# other functions
print(len("value"))
print(max(1, 2, 3, 4, 5))
print(min(1, 2, 3, 4, 5))
print(abs(-1))


a = int(input("Give me the height "))
b = int(input("Give me the width "))
# c = sqrt(pow(a, 2) + pow(b, 2))
# c = pow(pow(a, 2) + pow(b, 2), 0.5)

c = ((a ** 2) + (b ** 2)) ** 0.5

print(c)
