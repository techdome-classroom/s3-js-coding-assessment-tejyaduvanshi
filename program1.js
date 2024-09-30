/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

      
let stack = [];
let bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
};

for (let char of s) {
    if (char in bracketMap) {
        let topElement = stack.length ? stack.pop() : '#';
        if (bracketMap[char] !== topElement) {
            return false;
        }
    } else {
        stack.push(char);
    }
}


return stack.length === 0;

    
};

module.exports = { isValid };


