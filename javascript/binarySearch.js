const binarySearch = (list, target) => {
    let first = 0
    let last = list.length - 1

    while(first <= last){
        let midpoint = Math.floor((first + last) / 2)
        if(list[midpoint] === target){
            return midpoint
        }    
        else if(list[midpoint] < target){
            first = midpoint + 1
        }
        else{
            last = midpoint - 1
        }    
    }
    return - 1
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

const result1 = binarySearch(numbers, 10);
verify(result1);

const result2 = binarySearch(numbers, 0);
verify(result2);