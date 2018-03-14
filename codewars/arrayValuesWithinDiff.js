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

// clean solution, does same as above

class GroupByDifference {
  constructor(numbers) {
    this.numbers = numbers;
  }

  find(range) {
    return this.numbers
      .slice()
      .sort((a, b) => a - b)
      .filter((n, i, a) => a[i + 1] - n <= range || n - a[i - 1] <= range);
  }
}
