arr = [64, 34, 25, 12, 22, 11, 90]

def bubbleSort(arr):
    for i in range(len(arr)):
        for j in range(0, len(arr) - 1):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
    return arr

print(bubbleSort(arr))