/*#include <iostream>
using namespace std;

int* selectionSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = i + 1; j < size; j++) {
            if (arr[j] < arr[i]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


int main()
{
    int arr[] = { 64, 25, 12, 22, 11 };
    int arraySize = sizeof(arr) / sizeof(arr[0]);
    cout << "array before sorting: [ ";

    for (int i = 0; i < arraySize; i++) {
        if (i != arraySize - 1) {
            cout << arr[i] << ", ";
        }
        else {
            cout << arr[i] << " ]" << endl;
        }
    }

    int* sortedArr = selectionSort(arr, arraySize);

    cout << "array After sorting: [ ";

    for (int i = 0; i < arraySize; i++) {
        if (i != arraySize - 1) {
            cout << sortedArr[i] << ", ";
        }
        else {
            cout << sortedArr[i] << " ]" << endl;
        }
    }
}
*/