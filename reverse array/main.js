let myArray = [5, 0, 17, 9, -2, 20];
let arr2 = [10, 5, 12, -1, 22];
let arr3 = [64, 25, 12, 22, 11];

function reverseArray(arr) {
    for(let i = 0; i < parseInt(arr.length / 2); i++) {
        swapElements(arr, i, (arr.length - (i + 1)));
    }

    console.log(arr);
}

function swapElements(arr, first, second) {
    let container = arr[first];
    arr[first] = arr[second];
    arr[second] = container;
    // console.log(first, second)
}

reverseArray(myArray); // [20, -2, 9, 17, 0, 5]
reverseArray(arr2); // [22, -1, 12, 5, 10]
reverseArray(arr3); // [11, 22, 12, 25, 64]