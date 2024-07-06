// Question 3
// Generate All Permutations of a String

function generatePermutations(str) {
    if (str.length <= 1) {
        return [str];
    }

    let permutations = []
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        let remainingString = str.slice(0, i) + str.slice(i + 1);

        for (let permutation of generatePermutations(remainingString)) {
            permutations.push(char + permutation)
        } 
    }
    return permutations;
}


// TEST CASES: 
let input1 = "AB"; 
// Expected Output: ["AB", "BA"]
console.log(generatePermutations(input1));

let input2 = "A"; 
// Expected Output: ["A"]
console.log(generatePermutations(input2));

let input3 = "ABC";
// Expected Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
console.log(generatePermutations(input3));