let bubbleSort = arr => {
  for (var i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr;
};

const quickSort = arr => {
  const sort = (low, high) => {
    let i = low;
    let j = high;
    const m = arr[Math.round((i + j) / 2)];

    while (i < j) {
      while (arr[i] < m) {
        i += 1;
      }

      while (arr[j] > m) {
        j -= 1;
      }

      if (i <= j) {
        if (arr[i] !== arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        i += 1;
        j -= 1;
      }
    }

    if (j > low) {
      sort(low, j);
    }

    if (i < high) {
      sort(i, high);
    }
  }

  sort(0, arr.length - 1);

  return arr;
};
