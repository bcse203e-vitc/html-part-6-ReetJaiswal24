function findMissingNumber(arr, n) {
    // Calculate the expected sum of numbers from 1 to N
    let expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the actual sum of the array elements
    let actualSum = arr.reduce((acc, num) => acc + num, 0);
    
    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Example usage:
let inputArray = [1, 2, 3, 5, 6];
let n = 6; // The length of the sequence should be 6
let missingNumber = findMissingNumber(inputArray, n);
console.log(`Input: ${inputArray}`);
console.log(`Missing number: ${missingNumber}`);
alert(`Input: ${inputArray}\nMissing number: ${missingNumber}`);
