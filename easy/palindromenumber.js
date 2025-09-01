// Palindrome Number
var isPalindrome = function(x) {
    let str = x.toString()
    let reverse = str.split('').reverse().join('')
    if (str === reverse){
        return true
    }else{
        return false
    }
    }
    