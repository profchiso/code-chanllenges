function wordLength(arr) {
//code goes here
let myMap=new Map;
for(let i of arr){
  myMap.set(i.toLowerCase(),i.length);
}
return myMap;

}

module.exports = wordLength;