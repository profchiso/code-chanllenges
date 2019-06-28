function paceSub(S, W, T) {
  // code goes here ...

sLen=S.length;
  let WArr=W.split("");
  let newArr=[];

  for(let k=0;k<=WArr.length+sLen;k++){
    for(let i=0;i<S.length;i++){
      if(WArr[0]==S[i]){
        let elem;
        let indexOfTheFoundElement=(S.indexOf(S[i]));
        if(indexOfTheFoundElement+T<sLen){

         elem= S[indexOfTheFoundElement+T];
        newArr.push(elem);
        WArr.shift();
      }else if(indexOfTheFoundElement+T>=sLen){
        var position=(indexOfTheFoundElement+T)%sLen;
        elem=S[position];
        newArr.push(elem);
        WArr.shift();

       }//else if(indexOfTheFoundElement+T==sLen){
        //  elem=S[0];
        //  newArr.push(elem);
        //  WArr.shift();
        // }
     
      }
    }
  }
  

  return newArr.join("").toString();
}

module.exports = paceSub;
