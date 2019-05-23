


function bubbleSort(array = ['g','a','z','b','n','s','q','d']){
    for (let i = 0; i <  array.length; i++){

        swapped = false;

        for (let j = 0; j < array.length; j++){

            _array = [];

            if(array[j] > array[j+1]){

            _array = array[j+1];
            array[j+1] = array[j];
            array[j] = _array;

            swapped = true;
            }

        }
        debugger;
        if (!swapped) {
            return console.log(array);
        }
    }
}

bubbleSort();