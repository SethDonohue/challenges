class GroupByDifference {
  constructor(numbers) {
    this.numbers = numbers;
  }

  find(difference) {
    const sortedArr = this.numbers.sort((a, b) => a - b);
    const results = [];
    for (let i = 0; i <= sortedArr.length; i++) {
      if (Math.abs(sortedArr[i] - sortedArr[i + 1]) <= difference)
        results.push(sortedArr[i]);
      else if (Math.abs(sortedArr[i] - sortedArr[i - 1]) <= difference)
        results.push(sortedArr[i]);
    }
    return results;
  }
}
