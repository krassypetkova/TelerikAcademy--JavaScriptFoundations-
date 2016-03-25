/*Problem 1. Exchange if greater

 -Write an if statement that takes two double variables a and b and exchanges
 their values if the first one is greater than the second.
 -As a result print the values a and b, separated by a space.*/

function changeValues (a, b) {
    var c;

    if (a > b) {
        c = b;
        b = a;
        a = c;
    }

    console.log(a + " " + b);
    return a + " " + b;
}
changeValues(4, 3);
changeValues(5, 7);
changeValues(-3, -5);
changeValues(10, 0);
changeValues(3, 3);
