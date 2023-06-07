
function removeDuplicatesSort(numbers) {

    // removal of duplicates from the provided numbers in function parameter
    const uniqueNumbers = [...new Set(numbers)];

    // Sorting numbers in descending order
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers;
}

// Assuming the list of numbers
const numbers = [5, 2, 10, 8, 2, 1, 5, 8, 3, 10];

// storing the unique numbers in sortedNumber variable 
const sortedNumbers = removeDuplicatesSort(numbers);

// Printing the unique numbers
console.log(sortedNumbers);
