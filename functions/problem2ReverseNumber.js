/*Problem 2. Reverse number

 -Write a function that reverses the digits of given decimal number.*/

function reverseNumber(number) {
    var reversed = number.toString().split('').reverse().join('');

    console.log(parseFloat(reversed));
    return parseFloat(reversed);

    // Number(), can be used to convert JavaScript variables to numbers
    //console.log(Number(reversed));
    //return Number(reversed);


}
reverseNumber(256); // 652
reverseNumber(123.45); // 54.321
reverseNumber('krassy'); // NaN


