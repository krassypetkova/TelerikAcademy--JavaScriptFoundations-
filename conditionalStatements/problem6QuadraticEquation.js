/*Problem 6. Quadratic equation

 -Write a script that reads the coefficients a, b and c of a quadratic equation
 ax2 + bx + c = 0 and solves it (prints its real roots).

 -Calculates and prints its real roots.

 Note: Quadratic equations may have 0, 1 or 2 real roots.*/

function  realRoots (a, b, c) {
    var disc = ((b * b) - 4 * a * c),
        x, x1, x2;


    if (disc === 0) {
        x = (-b) / (2 * a);
        console.log("One double real root. x =  " + x);
    } else if (disc > 0) {
        x1 = (-b) + Math.sqrt(Math.pow(b, 2) - 4*a*c) / (2 * a);
        x2 = (-b) - Math.sqrt(Math.pow(b, 2) - 4*a*c) / (2 * a);
        console.log("Two double real roots. x1 = " + x1 + ", x2 = " + x2);
    } else {
        console.log("No real roots!");
    }
}
realRoots(2, 5, -3); // x1 = -3.25, x2 = -6.75
realRoots(-1, 7, 0); //x1 = -10.5, x2 = -3.5
realRoots(-0.5, 4, -8); // x = 4
realRoots(5, 3, 9); // no real roots

