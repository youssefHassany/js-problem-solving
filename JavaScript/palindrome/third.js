const word = "a";

let left = 0;
let right = word.length - 1; // this points to the last letter
let checker = 0;

while (left <= right) {
  if (word[left] === word[right]) {
    checker++;
  }

  left++;
  right--;
}

if (checker === Math.ceil(word.length / 2)) {
  console.log(true);
} else {
  console.log(false);
}
console.log(checker);
