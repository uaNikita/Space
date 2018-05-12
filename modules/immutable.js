const Immutable = require('immutable');

export default () => {

   var a = Immutable.Set([1, 2, 3, 4, 5,2,3,4]);

   console.log(a.subtract([2,4]).toJS());

};