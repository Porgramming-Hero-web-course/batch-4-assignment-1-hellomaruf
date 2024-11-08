{
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
  const removeDuplicates = (arr: number[]): number[] => {
    const withoutDuplicates = arr.filter((val, inx, array) => {
      return array.indexOf(val) === inx;
    });
    return withoutDuplicates;
  };
  
}
