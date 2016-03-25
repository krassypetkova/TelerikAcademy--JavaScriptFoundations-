/* Problem 2. Multiplication Sign

 -Write a script that shows the sign (+, - or 0) of the product of three real
 numbers, without calculating it.
 -Use a sequence of if operators. */

function signOfThree (a, b, c) {
    var sum = a + b + c;

    if (sum > 0) {
        console.log("The sign is '+'");
        return "+";
    } else if (sum < 0) {
        console.log("The sign is '-'");
        return "-";
    } else {
        console.log("The result is 0. The number zero has no sign!");
        return 0;
    }
}
signOfThree(0, 0, 0); // The result is 0. The number zero has no sign!
signOfThree(-1, -2, -3); // The sign is '-'
signOfThree(4, 5, 6); // The sign is '+'
signOfThree(-7, -8, 9); // The sign is '-'
signOfThree(-10, 11, 12); // The sign is '+'
signOfThree(0, -1, -2); // The sign is '-'
signOfThree(0, -2.5, 4); // The sign is '+'
