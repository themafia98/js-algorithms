/*
1) разбиение входного массива данных на более мелкие,
затем снова их дробление и так до тех пор, пока не останутся части из одного элемента;
2) слияние в правильном порядке (по умолчанию мы рассматриваем сортировку по возрастанию)
всех мелких частей снова в более и более крупные и
получение в итоге единого отсортированного массива.
*/

function merge(arr1,arr2){
    debugger;
    let sortArray = [];
    let i = j = 0;

    while(i < arr1.length && j < arr2.length){

        (arr1[i] > arr2[j]) ? sortArray.push(arr2[j++]) : sortArray.push(arr1[i++]);

    } 
    return [...sortArray,...arr1.slice(i),...arr2.slice(j)];
}
//arr1 = (3) [6, 4, 8], arr2 = (4) [1, 2, 9, 5]

function mergeSort(arr){

    if (arr.length <= 1) return arr;
    const length = Math.floor(arr.length/2);

    let cutLeft = arr.slice(0,length);
    let cutRight = arr.slice(length);

    return merge(mergeSort(cutLeft),mergeSort(cutRight));

}

console.log(mergeSort([6,4,8,1,2,9,5]));




