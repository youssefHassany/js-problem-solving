import math
def reverse(arr):
    right = len(arr) - 1 # points to the last element
    for i in range(math.floor(len(arr) / 2)):
        temp = arr[i]
        arr[i] = arr[right]
        arr[right] = temp
        i += 1
        right -= 1
    return arr

print(reverse([1, 2, 3, 4, 5]))