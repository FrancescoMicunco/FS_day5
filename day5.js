/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

const area = function(L1, L2) {
    let area = L1 * L2;
    return area
}
console.log(area(100, 20));
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(int1, int2) {
    if (int1 != int2) {
        let sum = int1 + int2;
        return sum;
    } else {
        let sum = (int1 + int2) * 3;
        return sum;
    }
}
console.log(crazySum(8, 8))
    /* EXERCISE 3
     Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
     It should return triple their absolute difference if the given number is greater than 19.
    */

const crazyDiff = function(int1) {
    if (int1 <= 19) {
        let absDiff = Math.abs(int1 - 19);
        return absDiff;
    } else {
        let absDiff = Math.abs(int1 - 19) * 3;
        return absDiff;
    }
}
console.log(crazyDiff(20))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/


const boundary = function(n) {
    let controlValue = true;
    if (n >= 20 && n <= 100 || n == 400) {
        return controlValue;
    } else {

        return controlValue = false;
    }

}
console.log(boundary(400))
    /* EXERCISE 5
     Write a function called "strivify" which accepts a string as a parameter.
     It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
    */

const strivify = function(string) {

    if (string.split(" ")[0] !== "Strive") {
        return console.log("Strive " + string);
    } else {
        return console.log(string)
    }
}
console.log(strivify("The best way to understand javascript"))
    /* EXERCISE 6
     Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
     HINT: Modulus Operator
    */

const check3and7 = function(int) {
    if (int > 0) {
        let checkPar = true;
        if ((int % 3 == 0) || (int % 7 == 0)) {
            return console.log(checkPar)
        } else {
            checkPar = false;
            console.log(checkPar)
        }
    } else {
        console.log("ALERT! CHOISE A POSITIVE NUMBER")
    }
}
console.log(check3and7(9))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
const reverseString = function(string) {
    let strSplit = string.split("");
    let reveseArr = strSplit.reverse();
    let joinArr = reveseArr.join();
    return joinArr;

}

console.log(reverseString("prova"))
    // ---------------- another way to do it CHEK for ERROR!-------------
    /* const reverseString1 = function(string) {
        let acc = "";
        for (let i = string.lenght - 1; i >= 0; i--) {
            acc += string[i]

        }
        return acc
    }
    console.log(reverseString1("Altra prova")) */


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* const upperFirst = function(string) {
    let stringArr = string.split(" ");
    console.log(stringArr)
    for (let i = 0; i < stringArr.lenght; i++) {
        stringArr[i] = stringArr[0][1].toUpperCase() + stringArr[i].substr(1)
    }
    stringArr.join(" ");
    return stringArr;
}
console.log(upperFirst("milano al tempo del colera")) */
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
const cutString = function(string) {
    let lenght = string.lenght;
    string = string.substring(0, lenght - 1);
    return string;
}
console.log(cutString("alessio"))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        arr[i] = arr.push[randomNumber]
    }
    return arr;
}
console.log(giveMeRandom(3))
    /* WHEN YOU ARE FINISHED
     Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
    */