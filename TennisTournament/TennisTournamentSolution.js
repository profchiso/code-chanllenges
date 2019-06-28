

function solution(P, C) {
var game= Math.floor(P/2);
if(C>=game){
    return game;
}
    return C;


}

module.exports = solution;