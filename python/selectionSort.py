def sortList(arr):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[j] < arr[i]:
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
    return arr

print(sortList([5, 8, 1, 12]))
