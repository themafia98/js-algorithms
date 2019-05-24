/*

мы берем первый элемент массива, и бегаем по всему оставшемуся массиву 
в поисках числа меньше нашего первого элемента.
 Когда мы пробегаем весь массив, если меньшее число найдено — 
 меняем его местами с первым элементом. 
После этого мы вибраем второй элемент, и все повторяется,
 пока для каждого элемента мы не пройдем оставшуюся часть массива.

 */


let selectionSort = function(array){
    let length = array.length;
    debugger;
    for (let i = 0; i < array.length; i++){
        let buffer = null;
        let indexMin = i;

        for(let j = i + 1; j < array.length; j++){
            if (array[indexMin] > array[j]){
                indexMin = j;
            }
        }
        buffer = array[i];
        array[i] = array[indexMin];
        array[indexMin] = buffer;
    }

    return array;
};


console.log(selectionSort([5,0,4,9,1,2,0]));