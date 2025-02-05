
def linear_search(list, target):
    """
    Returns the index of the searched if found otherwise -1
    """
    for i in range(0, len(list)):
        if list[i] == target:
            return i
    return -1


def verify(index):
    if index != -1:
        print("Target found at index: ", index)
    else:
        print("Target not found")


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = linear_search(numbers, 4)
verify(result)

result = linear_search(numbers, 7)
verify(result)
