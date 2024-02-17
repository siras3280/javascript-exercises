const reverseString = function(words) {
    let wordsArray = words
    let reversedWords = "";
    for (i = 0; i < wordsArray.length; i++){
        let value = i + 1;
        if (value <= wordsArray.length){
            reversedWords = wordsArray[i] + reversedWords;
        }
        
    }
    return reversedWords;
};
// Do not edit below this line
module.exports = reverseString;
