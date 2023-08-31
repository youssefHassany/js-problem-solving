let word = "level";

function checkPalindrome (str) {
    // this will count how many right operations are made (must be length / 2)
    let checker = 0;
    
    for(let i = 0; i < parseInt(str.length / 2); i++) {
        if (str[i].toLowerCase() === str[str.length - (i + 1)].toLowerCase()) {
            checker++
        }
    }
    
    if (checker === parseInt(str.length / 2)) {
        console.log("word is palindrome");
    } else {
        console.log("word is NOT palindrome");
    }
}

checkPalindrome(word);