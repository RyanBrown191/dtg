function randomDest(dest){
    return dest[Math.floor(Math.random()*dest.length)];
}
let dest = ["Charlotte", "Virginia Beach", "Washington D.C."];
console.log(randomDest(dest));
// Destination selected randomly
function randomTrans(trans){
    return trans[Math.floor(Math.random()*trans.length)];
}
let trans = ["Bus", "Train", "Car"];
console.log(randomTrans(trans));
// Transportation selected randomly
function randomEnter(enter){
    return enter[Math.floor(Math.random()*enter.length)];
}
let enter = ["Movies", "Park", "Museum"];
console.log(randomEnter(enter));
// Entertainment selected randomly
function randomRest(rest){
    return rest[Math.floor(Math.random()*rest.length)];
}
let rest = ["Olive Garden", "Red Lobster", "Outback"];
console.log(randomRest(rest));