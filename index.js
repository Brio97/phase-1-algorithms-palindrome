function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  let charArr = word.split('');
  let validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let lettersArr = [];
  charArr.forEach(char => {
    if (validChar.indexOf(char) > -1) lettersArr.push(char);   
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false; 
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
