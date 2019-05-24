import sort from '../sort/qsort.js';


let arr = [5,3,1,5,4,2];
let sortArr = sort(arr);
console.log(sortArr);

/*
работает путем сравнения искомого ключа t со средним элементом массива A[k]. Если они равны, алгоритм прекращает работу.
В противном случае та же операция повторяется для первой половины массива, если t < A[k], и для второй, если t > A[k].
*/

function BinarySearch(t = 5,A = sortArr){

    let i = 0, j = A.length, k;

    while (i < j){

        k = Math.floor((i+j)/2);

        if (t <= A[k]) j = k;
        else i = k+1;
    }

    if (A[i] === t) return i;
    else return -1;
}

console.log(BinarySearch());