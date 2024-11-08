{
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
  const countWordOccurrences = (sentence: string, word: string): number => {
    const sentenceArray = sentence.toLowerCase().split(" ");
    const providedWord = word.toLowerCase();
    let countNum = 0;
    sentenceArray.forEach((word) => {
      if (word === providedWord) {
        countNum++;
      }
    });
    return countNum;
  };
 
}
