// The function must modify the input array s in-place and should not return a new array.

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap elements
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};

let s = ["h","e","l","l","o"];
reverseString(s);
console.log(s); // ["o","l","l","e","h"]


// In-place Reverse using for loop:
// var reverseString = function(s) {
//     let n = s.length;
//     for (let i = 0; i < Math.floor(n / 2); i++) {
//         let temp = s[i];
//         s[i] = s[n - 1 - i];
//         s[n - 1 - i] = temp;
//     }
// };


// Recursive In-place Reverse:
// var reverseString = function(s, left = 0, right = s.length - 1) {
//     if (left >= right) return;

//     // Swap elements at left and right
//     [s[left], s[right]] = [s[right], s[left]];

//     // Recurse inward
//     reverseString(s, left + 1, right - 1);
// };
