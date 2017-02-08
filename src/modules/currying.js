
export default () => {

   const add = function (orig) {

      var inner = function (val) {

         let result = orig;

         if (parseInt(val + '', 10) === val) {
            result += val;
         }

         return add(result);
      };

      inner.valueOf = function () {
         return orig;
      };

      return inner;

   };


   window.add = add;


}




