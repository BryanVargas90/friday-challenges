const myArray = [7, 3, 81, 4, 9, 100, 200, 5, 3, 2] 
let largest = 0

for(let i=0; i<myArray.length; i++){
    if(myArray[i] < myArray[i+1]){
        largest = myArray[i+1]
    }
}

console.log(largest)