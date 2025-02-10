def binary_search(list, target):
    first = 0
    last = len(list) - 1

    while(first <= last):
        midpoint = (first + last) // 2
        if list[midpoint] == target:
            return midpoint
        elif list[midpoint] < target:
            first = midpoint + 1
        else:
            last = midpoint - 1
    return -1



def verify(index):
    if index != -1:
        print("Target found at index: ", index)
    else:
        print("Target not found")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

result = binary_search(numbers, 15)
verify(result)

result = binary_search(numbers, 79)
verify(result)
