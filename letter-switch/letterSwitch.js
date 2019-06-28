function switchChar(inputChar, actualChar, changeChar) {
    // Code goes here

    let lInputChar = inputChar.length;
    let lActualChar = actualChar.length;
    let lChangeChar = changeChar.length;
    let str = "";
  
    if (lActualChar < lChangeChar || lActualChar > lChangeChar) {
        return "Length mismatch";
    } else if (lInputChar > lActualChar) {
        return -1;
    } else if (inputChar.length <=0) {
        return str;
    }

    for (let t = 0; t < actualChar.length; t++) {
        if (actualChar.indexOf(actualChar[t]) != t) {
            return "Repeated value";
        }
    }
    for (let i = 0; i <= inputChar.length+1; i++) {
        for (let j = 0; j < actualChar.length; j++) {
            if (inputChar[i] == actualChar[j]) {
                

               let index = actualChar.indexOf(actualChar[j]);
                
                str += changeChar[index];
            }
        }
        
    }
    return str;
    
    


}
module.exports = switchChar;
