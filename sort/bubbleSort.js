


function bubbleSort(array = ['g','a','z','b','n','s','q','d']){
    for (let i = 0; i <  array.length; i++){

        let swapped = false;

        for (let j = 0; j < array.length; j++){

           let  _array = [];

            if(array[j] > array[j+1]){

            _array = array[j+1];
            array[j+1] = array[j];
            array[j] = _array;

            swapped = true;
            }

        }
        debugger;
        if (!swapped) {
            return array;
        }
    }
}

let array = [5,3,2,1,0];


for(let i = 1; i < array.length; i++){

    let j = i;
    let _array = null;


    while(j > 0 && array[j] < array[j-1]){
        debugger;
        _array = array[j-1];
        array[j-1] = array[j];
        array[j] = _array;
        j = j - 1;
    }

    console.log(array);
}
