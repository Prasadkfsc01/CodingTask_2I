
// Assuming the list of numbers
const numbers = [5, 2, 10, 8, 2, 1, 5, 8, 3, 10];

// Function to remove the duplicates 
function removeDuplicatesSort(numbers) {

    // removal of duplicates from the provided numbers in function parameter to store in uniqueNumbers
    const uniqueNumbers = [...new Set(numbers)];

    // Sorting numbers in descending order
    uniqueNumbers.sort((a, b) => b - a);

    // Returning uniqueNumbers
    return uniqueNumbers;
}


// Run removeDuplicatesSort function & storing uniqueNumbers value in sortedNumbers variable 
const sortedNumbers = removeDuplicatesSort(numbers);

// Printing the sortedNumbers which contains unique numbers sorted in decending order
console.log(sortedNumbers);
