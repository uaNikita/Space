const add = origin => {
  const inner = val => {
    let result = origin;

    if (parseInt(val + '', 10) == val) {
      result += val;
    }

    return add(result);
  };

  inner.valueOf = () => origin;

  return inner;
};
