function checkPalindrome() {
    const word = document.getElementById('wordInput').value.toLowerCase();
    const reversedWord = word.split('').reverse().join('');
    const result = document.getElementById('result');

    if (word === reversedWord) {
        result.textContent = `${word} is a palindrome!`;
    } else {
        result.textContent = `${word} is not a palindrome.`;
    }
}

