// Question 2
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

function returnIndices(array, target) {
    let indices = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[i+j] == target) {
                indices = [i, i+j];
            }
        }
    } return indices;
}

// Test cases
array1 = [1, 5, 2, 3]
target1 = 8
// Expected output: [1, 3]
let indices1 = returnIndices(array1, target1);
console.log("Indices: " + indices1[0] + ", " + indices1[1]);


array2 = [20, 1, 5, 2, 11]
target2 = 3
// Expected output: [1, 3]
let indices2 = returnIndices(array2, target2);
console.log("Indices: " + indices2[0] + ", " + indices2[1]);

array3 = [3, 2, 4]
target3 = 6
// Expected output: [1, 2]
let indices3 = returnIndices(array3, target3);
console.log("Indices: " + indices3[0] + ", " + indices3[1]);
