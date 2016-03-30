/*Problem 7. The biggest of five numbers

 -Write a script that finds the greatest of given 5 variables.

 -Use nested if statements.*/


function biggestOfFive (a, b, c, d, e) {
    var args = [].slice.apply(arguments);

    var max = Math.max(...args);

    console.log("The greatest of five variables is " + max);
}
biggestOfFive(10, 4, 2, 5, 60); // 60
biggestOfFive(100, 400, 0, 50, 60); // 400
biggestOfFive(-10, -50, -2, 5, -60); // 5

// ----------------------------------

function theBiggestOfFive (a, b, c, d, e) {

    var check1 = Math.max(a , b),
        check2 = Math.max(c, d);

    if (check1 > check2 && check1 > e) {
        console.log("The greatest variable is " + check1);
        return check1;
    } else if (check2 > check1 && check2 > e) {
        console.log("The greatest variable is " + check2);
        return check2;
    } else if (e > check1 && e > check2) {
        console.log("The greatest variable is " + e);
        return e;
    }
}
theBiggestOfFive(1, 4, 2, 5, 8); // 8
theBiggestOfFive(10, 40, 0, 50, 67); // 67
theBiggestOfFive(10, -50, -2, -5, -60); // 10