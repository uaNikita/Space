import _ from 'lodash';

export default () => {

   // recursive function to clone an object. If a non object parameter
   // is passed in, that parameter is returned and no recursion occurs.

   function cloneObject(obj) {
      if (obj === null || typeof obj !== 'object') {
         return obj;
      }

      var temp = obj.constructor(); // give temp the original obj's constructor
      for (var key in obj) {
         temp[key] = cloneObject(obj[key]);
      }

      return temp;
   }

   var bob = {
      name: "Bob",
      age: 32
   };

   var bill = (cloneObject(bob));
   bill.name = "Bill";

}







