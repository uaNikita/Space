const states = {
  pending: 'Pending',
  resolved: 'Resolved',
  rejected: 'Rejected'
};

class Nancy {
  constructor(executor) {
    const laterCalls = [];
    const members = {
      [states.resolved]: {
        state: states.resolved,
        then: callback => new Nancy(resolve => resolve(callback(this.value))),
      },
      [states.pending]: {
        state: states.pending,
        then: callback => (
          new Nancy(resolve => (
            laterCalls.push(() => (
              resolve(this.then(callback))
            )))
          )
        ),
      }
    };
    const changeState = state => Object.assign(this, members[state]);

    const apply = (value, state) => {
      if (this.state === states.pending) {
        this.value = value;

        changeState(state);

        laterCalls.forEach(laterCall => laterCall());
      }
    };

    changeState(states.pending);

    executor(value => {
      if (value instanceof Nancy) {
        value.then(value => apply(value, states.resolved));
      } else {
        apply(value, states.resolved);
      }
    });
  }

  static resolve(value) {
    return new Nancy(resolve => resolve(value));
  }
}

const carry = output => input => {
  console.log(input);
  return output;
};

// Chain
Nancy.resolve(0)
  .then(carry(1)) // logs 0
  .then((input) => {
    console.log(input);
    return new Nancy(resolve => {
      setTimeout(() => {
        resolve('test')
      }, 1000)
    })
  }) // logs 'test'
  .then(carry(3))
  .then(carry(4)); // logs 2
