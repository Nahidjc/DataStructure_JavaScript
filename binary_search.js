function BinarySear(search) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] == search) {
            return `Find the value at position ${mid + 1}`
        }
        else if (numbers[mid] < search) {
            start = mid + 1;
        }
        if (numbers[mid] > search) {
            end = mid - 1;

        }

    }
    return "Not Found"


}
search = 9

const value = BinarySear(search);
console.log(value);