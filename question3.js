// Question 3
// Generate All Permutations of a String

function allPermutations(str) {

    let allPermutations = [];

    if (str.length == 1) {
        allPermutations.push(str);
        return allPermutations;
    }

    for (let i = 0; i < str.length - 1; i++) {
        for (let j = 0; j < str.length; j++) {
            allPermutations.push(str[i] + str[j]);
        }
    }     
    return allPermutations;

}


// TEST CASES: 
let input1 = "AB"; 
// Expected Output: ["AB", "BA"]
console.log(allPermutations(input1));

let input2 = "A"; 
// Expected Output: ["A"]
console.log(allPermutations(input2));

let input3 = "ABC";
// Expected Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
console.log(allPermutations(input3));