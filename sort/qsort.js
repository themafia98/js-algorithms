/*
Найти опорный элемент в массиве для сравнения с остальными частями, затем сдвигать элементы так,
чтобы все части перед опорным элементом были меньше его, а все элементы после опорного были больше его.
После этого рекурсивно выполнить ту же операцию на элементы до и после опорного.
*/

export default function qsort(arr) {

    if (arr.length <= 1){
        return arr;
    } else {

        const pivot = arr[Math.floor(arr.length/2)];
        const left = arr.filter(element => element < pivot);
        const right = arr.filter(element => element > pivot);
        return [...qsort(left),pivot,...qsort(right)];
    }
};


