function LinearSearch(search) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === search) {
            return `Find the value at position ${i + 1}`
        }

    }
    return "Not Found"
}
search = 11

const value = LinearSearch(search);
console.log(value);