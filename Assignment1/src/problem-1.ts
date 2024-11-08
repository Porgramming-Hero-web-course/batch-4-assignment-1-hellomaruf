{
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  const sumArray = (arr: number[]): number => {
    const sumOfArr = arr.reduce((acc, num) => acc + num, 0);
    return sumOfArr;
  };

}
