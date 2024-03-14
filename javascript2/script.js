//. String Manipulationn
//1a. Write a function that reverses a given string

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString('hello'));

//1b.Count Characters: Create a function that counts the number of characters in a string.

function countCharacters(str) {
    return str.length;
}

// Example usage:
console.log(countCharacters('hello')); 

//1c.Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.


function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
console.log(capitalizeWords('this is a sentence')); // Output: 'This Is A Sentence'

//.Array Function:
//2a.Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Example usage:
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMin([1, 2, 3, 4, 5])); // Output: 1

//2b.Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

//2c.Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example usage:
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // Output: [2, 4]

//Mathematics Function
//3a.Factorial: Write a function to calculate the factorial of a given number.
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120

//3b.Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage:
console.log(isPrime(11)); // Output: true
console.log(isPrime(15)); // Output: false

//3c.Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage:
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
