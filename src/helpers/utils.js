const sortByDate = (objArr) => {
  for (let i = 1; i < objArr.length; i++) {
    let currentPos = i;
    for (let j = i - 1; j >= 0; j--) {
      if (objArr.at(currentPos).date < objArr.at(j).date) {
        [objArr[currentPos], objArr[j]] = [objArr[j], objArr[currentPos]];
        currentPos = j;
      } else {
        break;
      }
    }
  }
};

export { sortByDate };
