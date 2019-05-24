/*
по очереди сравнивает элементы заданного списка с ключом поиска до тех пор, 
пока не будет найден элемент с указанным значением ключа (успешный поиск) 
или весь список будет проверен, но требуемый элемент не найден (неудачный поиск).
*/


const search = (element = 'hello',array = [1,2,3,'asdasdas']) =>{

    let index = 0;
    array.push('key');

    let key = array[array.length-1];

    while(array[index] !== element && array[index]) index++;
    
    if(index < array.length-1) return index;
    else return -1;
};

console.log(search('hello',[1,2,3,'asdasdas','hello','asdasdasd']));