//Regular Functions
let list_of_numbers=[23,5,9,2,4,5,6]
function sum_of_numbers1(list_of_numbers){
    let sum=0;
    for(i=0;i<list_of_numbers.length;i++){
        sum=sum+list_of_numbers[i];
    }

    console.log(sum)
}

sum_of_numbers1(list_of_numbers)

//Arrow Functions


let sum_of_numbers2 = ()=>{
    let sum=0;
    for(num of list_of_numbers){
        sum=sum+num;
    }

    console.log(sum)
}

sum_of_numbers2()