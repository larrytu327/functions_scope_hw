// 1.1. What is the difference between a parameter and an argument?
//An argument is used for functions and are the variables defined for that function and when it's called, while parameter is the variables that are defined when the function is declared. Function parameters are the variables that define the function, while function arguments are the real values passed to the function.

// 1.2. Within a function, what is the difference between return and console.log?
//console.log will print out whatever you'd like, while return is used for returning values from a function when it's called.

// 1. 3. What are the implications of the ability of a function to return a value?
//The function was invoked and returned a value with proper arguments that fulfilled the defined parameters of the function.

// 2. calculateCube
function calculateCube(num) {
    let cubeResult = num*num*num;
    //console.log(cubeResult);
    return cubeResult;
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    var vowelAnswer = 0;
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        vowelAnswer = "true";
    }
    else {
        vowelAnswer = "false";
    }
    return vowelAnswer;
}
console.log(isAVowel("b"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let wordLengths = [word1.length, word2.length];
    return wordLengths;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0;i < arr.length;i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5,6]));

// 6.1 checkPrime
function checkPrime(num) {
    let primeOrNot;
    for(let i = 2;i<=Math.sqrt(num);i++){
        if(num%i == 0){
            primeOrNot = false;
            return primeOrNot;
        }
        else {
            primeOrNot = true;
        }
    }
    return primeOrNot;
}
//console.log(checkPrime(13));


// 6.2 printPrimes
function printPrimes(num) {
    for(let i = 2;i<=num;i++){
        if (checkPrime(i)==true){
            console.log(i + " ");
        }
    }
}
printPrimes(97);

// 7. printLongestWord
function printLongestWord(arr) {
    // console.log(arr.length);
    // console.log(arr);
    // console.log(arr[1]);
    let string;
    let longestLetterCount = 0;
    let longestWord;
    for(let i = 0;i<arr.length;i++){
        string = arr[i];
        let count = string.length;
        if (string.length > longestLetterCount) {
            longestWord = arr[i];
            longestLetterCount = string.length;
        }
        //console.log(count);
        }
        return longestWord;
    }

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};