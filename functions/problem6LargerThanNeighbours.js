/*Problem 6. Larger than neighbours

 - Write a function that checks if the element at given position in given array of integers
 is bigger than its two neighbours (when such exist).*/

function largerThanNeighbours(array, index) {

    if (array[index - 1] < array[index] && array[index + 1] < array[index]) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
largerThanNeighbours([6, 8, 5, 3, 9], 1); // true
largerThanNeighbours([3, 4, 5, 1, 7], 3); // false
largerThanNeighbours([4, -2, -1, -3, 8], 2); // true
largerThanNeighbours([3, 4, 4, 4, 3], 2); // false


