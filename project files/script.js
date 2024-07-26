function remove(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        let character = str.charAt(i);
        if (!checkPunctuation(character) && character !== ' ') {
            res += character;
        }
    }
    return res;
}

function checkPunctuation(char) {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    return punctuation.includes(char);
}

function checkPalindrome() {
    const input = document.getElementById('inputText').value;
    const cleanInput = remove(input.toLowerCase());
    console.log("clean input: "+ cleanInput )
    
    let reversedInput = '';
    for (let i = cleanInput.length - 1; i >= 0; i--) {
        reversedInput += cleanInput[i];
    }

    const result = document.getElementById('result');

    if (cleanInput === reversedInput) {
        result.textContent = `"${input}" is a palindrome!`;
    } else {
        result.textContent = `"${input}" is not a palindrome.`;
    }
}







// function checkPalindrome() {
//     const word = document.getElementById('wordInput').value.toLowerCase();
//     const reversedWord = word.split('').reverse().join('');
//     const noSpaces = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
//     const result = document.getElementById('result');

//     if (word === noSpaces) {
//         result.textContent = `${word} is a palindrome!`;
//     } else {
//         result.textContent = `${word} is not a palindrome.`;
//     }
// }


// https://www.geeksforgeeks.org/how-to-remove-punctuation-from-text-using-javascript/
// function remove(str) {
//     let res = '';
//     for (let i = 0; i < str.length; i++) {
//         let character = str.charAt(i);
//         if (!checkPunctuation(character)) {
//             res += character;
//         }
//      }
    // console.log("remove: "+ res)
//     return res;
// }

// function checkPunctuation(char) {
//     const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
//     console.log(punctuation.includes(char));
//     return punctuation.includes(char);
// }

// let str = "Welcome, to the geeksforgeeks!!!";

// console.log(remove(str));




// a man a plan a canal panama