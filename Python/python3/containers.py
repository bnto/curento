# containers

# tuple, similar to list but immutable

a_tuple = ("bob", "sue", "sally")
print(a_tuple)


# list

a_list = ["bob", "sue"]
a_list.append("sally")
a_list.append("john")
a_list.append("anna")
a_list.append("sally")
print(a_list)

# set similar to list but no duplicates

set = set(a_list)
print(set)
print(list(set))

# dictionary

a_dict = {"key": "value", "key2": "value2"}
print(a_dict)

print(a_dict["key"])
print(a_list)

# slicing
print(a_list[1:4:2])

# from a 1-10 list to 8,6,4,2
an_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# an_list = an_list[1:8:2][::-1]
# an_list = an_list[7:0:-2]
an_list = an_list[7::-2]
print(an_list)
