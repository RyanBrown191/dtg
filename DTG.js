function randomDest(dest){
    return dest[Math.floor(Math.random()*dest.length)];
}
let dest = ["Charlotte", "Virginia Beach", "Washington D.C."];
do {
    alert(randomDest(dest));
uIDest = prompt("Is this where you want to go? Enter Yes or No");
}
while (uIDest.trim().toLowerCase() == "no");
// Destination selected randomly

function randomTrans(trans){
    return trans[Math.floor(Math.random()*trans.length)];
}
let trans = ["Bus", "Train", "Car"];
do {
    alert(randomTrans(trans));
uITrans = prompt("Is this where you want to go? Enter Yes or No");
}
while (uITrans.trim().toLowerCase() == "no");
// Transportation selected randomly

function randomEnter(enter){
    return enter[Math.floor(Math.random()*enter.length)];
}
let enter = ["Movies", "Park", "Museum"];
do {
    alert(randomEnter(enter));
uIEnter = prompt("Is this where you want to go? Enter Yes or No");
}
while (uIEnter.trim().toLowerCase() == "no");
// Entertainment selected randomly

function randomRest(rest){
    return rest[Math.floor(Math.random()*rest.length)];
}
let rest = ["Olive Garden", "Red Lobster", "Outback"];
do {
    alert(randomRest(rest));
uIRest = prompt("Is this where you want to go? Enter Yes or No");
}
while (uIRest.trim().toLowerCase() == "no");
// Restaurant selected randomly
