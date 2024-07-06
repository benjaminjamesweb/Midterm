// Question 1
// Find the missing number in an unsorted array whose value is up to n
// The array always starts with 1

function findMissingNumber(arr, n) {
    let sortedArray = bubbleSort(arr);
    let missingNumber = sortedArray[sortedArray.length - 1] + 1;

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i+1] - sortedArray[i] == 2) {
            missingNumber = sortedArray[i] + 1;
        }
    }

    return missingNumber;

}

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j + 1] < array[j] ) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

let array1 = [5, 4, 1, 2];
let n1 = 5;
// Expected output: 3
const expectedOutput1 = findMissingNumber(array1, n1);
console.log(expectedOutput1);

let array2 = [9, 5, 3, 2, 6, 1, 7, 8, 10];
let n2 = 10;
// Expected output: 4
const expectedOutput2 = findMissingNumber(array2, n2);
console.log(expectedOutput2);

let array3 = [2, 3, 1, 5];
let n3 = 5;
// Expected output: 4
const expectedOutput3 = findMissingNumber(array3, n3);
console.log(expectedOutput3);

let array4 = [1, 2, 3, 4, 5];
let n4 = 6;
// Expected output: 6
const expectedOutput4 = findMissingNumber(array4, n4);
console.log(expectedOutput4);