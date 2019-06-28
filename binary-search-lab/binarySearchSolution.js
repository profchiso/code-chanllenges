//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array
// it returns true if the number is in the array and false if otherwise

function binarySearch(array, number) {
  //Type your solutions here
//   let first = 0;    
//     let last = array.length - 1;   
//     let position = -1;
//     let found = false;
//     let middle;
//     let count=0;

//     while (found === false && first <= last) {
//         middle = Math.floor((first + last)/2);
//         if (array[middle] === number) {
//             found = true;
//             position = middle;
//         } else if (array[middle] > number) {  //if in lower half
//             //first = middle + 1;
//             last = middle - 1;
//         } else {  //in in upper half
//             first = middle + 1;
//             //last = middle - 1;
//         }
//         count=count+1;
//     }
    
//     return {
//       "index":position,
//       "count" :count
//     };
let count=0;
let f=0;
let l=array.length-1;
let found=false;
let position=-1;
let m;
for(let i=0;f<=l && found==false;i++){
m=Math.floor((f+l)/2);
if(array[m]==number){
    found=true;
    position=m;
   
}else if(array[m]>number){
    l=m-1;

}else if(array[m]<number){
    f=m+1;
}
count++;
}
return{
    "index":position,
    "count":count
}
}

module.exports = binarySearch;