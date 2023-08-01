let word = "level";

function checkPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    
    if (str.toLowerCase() === reversedStr.toLowerCase()) {
        console.log("Word is palendrome");
    } else {
        console.log("Word is NOT palendrome");
    }
}

checkPalindrome(word);