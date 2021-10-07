let dest = ["Charlotte", "Virginia Beach", "Washington D.C."];
let trans = ["Bus", "Train", "Car"];
let enter = ["Movie", "Park", "Museum"];
let rest = ["Olive Garden", "Red Lobster", "Outback"];
let destination;
let transportation;
let entertainment;
let restaurant;
let uIDest;
let uITrans;
let uIEnter;
let uIRest;
function randomArrayItem(array){
    return array[Math.floor(Math.random()*array.length)];
}
do {
    destination = (randomArrayItem(dest));
    alert(destination);
    uIDest = prompt("Is this where you want to go? Enter Yes or No");
}
while (uIDest.trim().toLowerCase() == "no");
// Destination selected randomly
do {
    transportation = (randomArrayItem(trans));
    alert(transportation);
    uITrans = prompt("Is this how you want to travel? Enter Yes or No");
}
while (uITrans.trim().toLowerCase() == "no");

// Transportation selected randomly
do {
    entertainment = (randomArrayItem(enter));
    alert(entertainment);
    uIEnter = prompt("Is this where you want to go? Enter Yes or No");
}
while (uIEnter.trim().toLowerCase() == "no");

// Entertainment selected randomly
do {
    restaurant = (randomArrayItem(rest));
    alert(restaurant);
    uIRest = prompt("Is this where you want to eat? Enter Yes or No");
}
while (uIRest.trim().toLowerCase() == "no");

let tripArray = tripAssembler(destination, entertainment, transportation, restaurant);

// Restaurant selected randomly
alert("Your trip is complete!");
alert("You are going to " + tripArray[0] + ", and traveling by "+ tripArray[2]+ ". Your entertainment will be a "+ tripArray[1]+ " and you will be eating at "+ tripArray[3]+ ".");
alert("Only the finest local dining for you");

console.log("You are going to " + tripArray[0] + ", and traveling by "+ tripArray[2]+ ". Your entertainment will be a "+ tripArray[1]+ " and you will be eating at "+ tripArray[3]+ ".");

function tripAssembler(d, e, t, r){
    return [d, e, t, r];
}

