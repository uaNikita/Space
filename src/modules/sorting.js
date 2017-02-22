import _ from 'lodash';

export default () => {
   let arr = _.times(10, () => _.random(0, 100));

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


   let quickSortExample = arr => {

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

         if (j > low) {
            sort(low, j);
         }

         if (i < high) {
            sort(i, high);
         }

      }

      sort(0, arr.length - 1);

      return arr;
   }


   const quickSort = arr => {

      let temp;

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

                  temp = arr[j];

                  arr[j] = arr[i];

                  arr[i] = temp;

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


   console.log('Финальный массив\n', quickSort(arr));

}