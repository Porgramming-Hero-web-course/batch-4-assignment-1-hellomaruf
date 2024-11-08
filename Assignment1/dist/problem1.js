"use strict";
{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    const sumArray = (arr) => {
        const sumOfArr = arr.reduce((acc, num) => acc + num, 0);
        return sumOfArr;
    };
    //   console.log(sumArray([1, 2, 3, 4, 5]));
}
