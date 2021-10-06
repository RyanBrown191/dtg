// Destination selected randomly
function randomDest(dest){
    return dest[Math.floor(Math.random()*dest.length)];
}

let dest = ["Charlotte", "Virginia Beach", "Washington D.C."];
console.log(randomDest(dest));