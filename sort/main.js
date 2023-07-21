let arr = [10, 5, 12, -1, 0, 22];
let arr2 = [64, 25, 12, 22, 11];

function sortArr(arr) {
    let start;

    for(let i = 0; i < arr.length; i++) {
        turn = arr[i];

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                swap(arr, i, j);
            }
        }
    }

    console.log(arr);
}

function swap(arr, i, j) {
    let container = arr[i];
    arr[i] = arr[j];
    arr[j] = container;
}

sortArr(arr); // -1, 0, 5, 10, 12, 22
sortArr(arr2); // 11, 12, 22, 25, 64