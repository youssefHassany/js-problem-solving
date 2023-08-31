#include <iostream>
#include <cmath>

using namespace std;

int* reverseArray(int arr[], int size) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}

int main()
{
    int arr[] = { 64, 25, 12, 22, 11 };
    int arraySize = sizeof(arr) / sizeof(arr[0]);
    cout << "array before: [ ";

    for (int i = 0; i < arraySize; i++) {
        if (i != arraySize - 1) {
            cout << arr[i] << ", ";
        }
        else {
            cout << arr[i] << " ]" << endl;
        }
    }

    int* reversedArr = reverseArray(arr, arraySize);

    cout << "array Reversed: [ ";

    for (int i = 0; i < arraySize; i++) {
        if (i != arraySize - 1) {
            cout << reversedArr[i] << ", ";
        }
        else {
            cout << reversedArr[i] << " ]" << endl;
        }
    }
}
