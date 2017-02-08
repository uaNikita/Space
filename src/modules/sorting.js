import _ from 'lodash';

export default () => {
   let arr = _.times(100, () => _.random(0, 100));

   // arr = [7, 4, 8, 6, 7, 9, 5, 10, 2, 1];
   // arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

   console.log('Первоначальный массив\n', arr);

   let sortBy1 = (arr) => {
      arr = _.clone(arr);

      let arrLength = arr.length;
      let k;

      for (var i = 0; i < arrLength; i += 1) {

         for (let j = 0; j < arrLength - i - 1; j += 1) {

            if (arr[j] > arr[j + 1]) {
               k = arr[j];

               arr[j] = arr[j + 1];

               arr[j + 1] = k;
            }

         }

      }

      return arr;
   };

   let sortBy2 = (arr) => {
      arr = _.clone(arr);

      let left = 0;
      let right = arr.length - 1;
      let i;
      let k;

      console.log('-----------------------');

      while (left < right) {

         for (i = left; i < right; i += 1) {

            if (arr[i] > arr[i + 1]) {
               k = arr[i + 1];

               arr[i + 1] = arr[i];

               arr[i] = k;
            }

         }

         right -= 1;

         for (i = right; i > left; i -= 1) {

            if (arr[i] < arr[i - 1]) {
               k = arr[i - 1];

               arr[i - 1] = arr[i];

               arr[i] = k;
            }

         }

         left += 1;

         console.log(arr);

      }

      console.log('-----------------------');

      return arr;
   };

   let sortBy3 = (arr) => {
      let temp;

      let sort = (arr, low, high) => {
         var i = low;
         var j = high;
         var middle = arr[Math.round(( low + high ) / 2)];

         console.log('middle', middle);

         while (i < j) {
            while (arr[i] < middle) {
               i += 1;
            }

            while (arr[j] > middle) {
               j -= 1;
            }

            if (i <= j) {
               if (arr[i] !== arr[j]) {
                  temp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = temp;
               }

               i += 1;
               j -= 1;
            }
         }

         if (low < j) {
            sort(arr, low, j);
         }

         if (i < high) {
            sort(arr, i, high);
         }
      }

      sort(arr, 0, arr.length - 1);

      return arr;

   };

   let sortFast = (arr) => {
      let temp;

      let sort = (low, high) => {
         let i = low;
         let j = high;
         let m = arr[Math.round((i + j) / 2)];

         while (i < j) {

            while (arr[i] < m) {
               i += 1;
            }

            while (arr[j] > m) {
               j -= 1;
            }

            if (i <= j) {
               if (arr[i] !== arr[j]) {
                  temp = arr[i];

                  arr[i] = arr[j];

                  arr[j] = temp;
               }

               i += 1;
               j -= 1;
            }

         }

         if (low < j) {
            sort(low, j);
         }

         if (high > i) {
            sort(i, high);
         }
      }

      sort(0, arr.length - 1);

      return arr;
   };


   console.log('Финальный массив\n', sortFast(arr));

}




