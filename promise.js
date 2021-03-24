class Nancy {
  constructor(executor) {
    const laterCalls = [];

    this.state = 'Pending';
    this.then = callback => (
      new Nancy(resolve => (
        laterCalls.push(() => (
          resolve(new Nancy(resolve => {
            resolve(callback(this.value))
          }))
        ))
      ))
    );

    const apply = (value) => {
      if (this.state !== 'Pending') {
        return;
      }

      this.value = value;

      this.state = 'Resolved';
      this.then = callback => (
        new Nancy(resolve => (
          resolve(callback(this.value))
        ))
      );

      laterCalls.forEach(laterCall => laterCall());
    };

    executor(value => {
      if (value instanceof Nancy) {
        value.then(value => apply(value));
      }
      else {
        apply(value);
      }
    });
  }
}

const carry = output => input => {
  console.log(input);
  return output;
};

// Chain
const promise = new Nancy(resolve => {
  resolve(0)
})
  .then(carry(1))
  .then((input) => {
    console.log(input);
    return new Nancy(resolve => {
      setTimeout(() => {
        resolve('test')
      }, 1000)
    })
  })
  .then(carry(3))
  .then(carry(4));


promise
  .then((input) => {
    console.log(input);
    return new Nancy(resolve => {
      setTimeout(() => {
        resolve('test')
      }, 1000)
    })
  })
  .then(carry(5))
  .then(carry(6))
  .then(carry(7));
