/*Problem 4. Sort 3 numbers

 -Sort 3 real values in descending order.
 -Use nested if statements.*/

function numsDescendingOrder() {
    var args = [].slice.apply(arguments);

    var sortedArray = (args.sort(function(a, b){return b-a}));

    console.log(sortedArray);
    return sortedArray;
}

numsDescendingOrder(100, 5, 50); // 100, 50, 5
numsDescendingOrder(500, 45, -2); // 500, 42, -2
numsDescendingOrder(-1, -20, -40); // -1, -20, -40
numsDescendingOrder(-4, -2, -3); // -2, -3, -4
numsDescendingOrder(1, 1, 1); // 1, 1, 18

// ---------------------------------------------------

function numsDescendingOrder(a, b ,c) {

    if (a > b && a > c) {
        if ( b > c) {
            console.log(a , b, c);
        } else {
            console.log(a, c, b);
        }
    } else if (b > a && b > c) {
        if (a > c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }
    } else if (c > a && c > b) {
        if (a > b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }
    } else {
        console.log("a = b = c");
    }
}

numsDescendingOrder(5, 3, 1); // 5, 3, 1
numsDescendingOrder(10, 4, 8); // 10, 8, 4
numsDescendingOrder(5, 100, 3); // 100, 5, 3
numsDescendingOrder(-3, -1, -2);// -1, -2, -3
numsDescendingOrder(-2, -4, 20); // 20, -2, -4
numsDescendingOrder(-0.4, 4.4, 4.3); // 4.4, 4.3, -0.4


