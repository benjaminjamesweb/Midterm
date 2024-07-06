function isValidParenthesis(str) {
    const stack = [];

    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (const char of str) {
        if (char === ' ') continue; 

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
            
        } else {
            const poppedValue = stack.pop();
            if (char !== map[poppedValue]) {
                return false;
            }
        }
    }

    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES: 
let str1 = "()"; 
// Expected Output: true
console.log(isValidParenthesis(str1));

let str2 = "(){}[]"; 
// Expected Output: true
console.log(isValidParenthesis(str2));

let str3 = "([})";
// Expected Output: false
console.log(isValidParenthesis(str3));

let str4 = "[({} )]";
// Expected Output: true
console.log(isValidParenthesis(str4));