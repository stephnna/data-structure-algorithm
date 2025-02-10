
const linearSearch = (list, target) => {
    for(let i = 0; i < list.length; i++){
        if(list[i] == target){
            return i;
        }
    }
    return -1;
}

const verify = (index) => {
    if(index != -1){
        console.log("Target found at: ", index);
    }
    else{
        console.log("Target not found");
}

}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const target1 = linearSearch(numbers, 12);
verify(target1);

const target2 = linearSearch(numbers, 6);
verify(target2);

