/*
var answer = prompt("Are we there yet?");

while (answer !== "yes" && answer !== "yeah"){
    var answer = prompt("Are we there yet??");
}

alert("YAY, WE MADE IT!!!");
*/

/* A user can enter any string as long as it contains "yes" in it */
var answer = prompt("Are we there yet?");

/* indexOf() method returns the first index at which a given element can be found in a string, or -1 if it is not found */
while (answer.indexOf("yes") === -1){
    var answer = prompt("Are we there yet??");
}

alert("YAY, WE MADE IT!!!");
