const palindromes = function (input) {
    let allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let chars = input.toLowerCase().split('').filter(c => allowed.includes(c));
    let isPalindrome = true;

    for(let i = 0; i < chars.length / 2; i++) {
        if(chars[i] !== chars[chars.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
