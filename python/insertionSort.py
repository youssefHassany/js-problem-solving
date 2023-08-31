arr = [64, 34, 25, 12, 22, 11, 90]

def insertionSort(arr):
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1
        while(j >= 0 and current < arr[j]):
            temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            j -= 1
        arr[j + 1] = current
    return arr

print(insertionSort(arr))
