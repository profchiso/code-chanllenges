function wordCount(arrayOfStrings) {
let obj={};

arrayOfStrings.map(function(x){
    if(obj[x]){
        obj[x]++;
    }else{
obj[x]=1;
}
});
return obj;

}

module.exports = wordCount;