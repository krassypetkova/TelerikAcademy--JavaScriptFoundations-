/*Problem 3. The biggest of Three

 -Write a script that finds the biggest of three numbers.
 -Use nested if statements.*/

function biggestOfThree(val1, val2, val3) {
    if (val1 > val2 && val1 > val3) {
        console.log("val1 = " + val1 + "." + " Val1 is greater!")
        return val1;
    } else if (val2 > val1 && val2 > val3) {
        console.log("val2 = " + val2 + "." + " Val2 is greater!")
        return val1;
    } else if (val3 > val1 && val3 > val2) {
        console.log("val3 = " + val3 + "." + " Val3 is greater!")
        return val3;
    } else {
        console.error("val1 = val2 = val3. The condition is not fulfilled!");
    }
}
biggestOfThree(5, 2, 2); // 5
biggestOfThree(-2, -2, 1); // 1
biggestOfThree(-2, 4, 3); // 4
biggestOfThree(0, -2.5, 5); // 5
biggestOfThree(-0.1, -0.5, -1.1); // -0.1
