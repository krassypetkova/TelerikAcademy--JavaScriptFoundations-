/*Problem 1. English digit

 -Write a function that returns the last digit of given integer as an English word.*/

function englishDigit(number) {
    var lastDigit = (Math.abs(number) % 10); // for a negative number

    switch(lastDigit) {
        case 0 : console.log("Zero");break;
        case 1: console.log("One");break;
        case 2: console.log("Two");break;
        case 3: console.log("Three");break;
        case 4: console.log("Four");break;
        case 5: console.log("Five");break;
        case 6: console.log("Six");break;
        case 7: console.log("Seven");break;
        case 8: console.log("Eight");break;
        case 9: console.log("Nine");break;
        default: console.log("Invalid number");break;
    }
}

englishDigit(6); // Six
englishDigit(35); // Five
englishDigit(512); // Two
englishDigit(1024); // Four
englishDigit(12309); // Nine

englishDigit(-8); // Eight
englishDigit(-411); // One
englishDigit([]); // Zero
englishDigit(''); // Zero
englishDigit(null); // Zero


