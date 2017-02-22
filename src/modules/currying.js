export default () => {

   const addExample = origin => {

      const inner = val => {

         let result = origin;

         if (parseInt(val + '', 10) == val) {
            result += val;
         }

         return add(result);

      };

      inner.valueOf = () => {
         return origin;
      };

      return inner;

   };


   const add = origin => {

      const inner = (val) => {

         let result = origin;

         if (parseInt(val + '', 10) == val) {
            result += val;
         }

         return add(result);

      }

      inner.valueOf = () => {
         return origin;
      }

      return inner;

   };

   window.three = add(3);
   window.four = add(4);

   window.seven = three(four);

   console.log(three(four));

   window.add = add;

}




