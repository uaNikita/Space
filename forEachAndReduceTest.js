const crypto = require('crypto');
const _ = require('lodash');

const data = Array.from(new Array(1000000), () => ({
  id: crypto.randomBytes(16).toString('hex'),
  user: _.random(1, 10)
}));

_.times(10, () => {
  console.time('forEach');

  const result1 = {};

  data.forEach(({ id, user }) => {
    if (!result1[user]) {
      result1[user] = [];
    }

    result1[user].push(id);
  });

  console.timeEnd('forEach');

  console.time('reduce');

  const result2 = data.reduce((ac, { id, user }) => {
    if (!ac[user]) {
      ac[user] = [];
    }

    ac[user].push(id);

    return ac;
  }, {});

  console.timeEnd('reduce');

  console.log('---------------');
});
