//the text inside the speech bubble
const message = document.getElementById('pet-message');

//assign the pet's stats into variables
const hunger = document.getElementById('hunger-stat');
const enjoyment = document.getElementById('enjoyment-stat');
const dirtyness = document.getElementById('dirtyness-stat');
const affection = document.getElementById('affection-stat');

//the pet objects
function Pet (name) {           // -----------------------------------------------
  this.name = name;             // | these objects don't really do anything yet, |
}                               // | they're just here incase i want to use them |
let dog = new Pet('Rufus');     // | for something else later!                   |
let cat = new Pet('Misty');     // -----------------------------------------------
let parrot = new Pet('Jacky');

//pet's name, just hanging out here doing nothing (again for later use maybe)
petName = document.getElementById('pet-name-input').value;

//functions for the action buttons: changes the message and raises stats
function feed () {
  message.innerHTML = "Yum, my favourite treat!";
  hunger.value = hunger.value + 10;
}
function play () {
  message.innerHTML = "Playing together is fun!";
  enjoyment.value = enjoyment.value + 10;
}
function bathe () {
  message.innerHTML = "Thanks, now i'm clean!";
  dirtyness.value = dirtyness.value + 10;
}
function pat () {
  message.innerHTML = "Aw, I love pats!";
  affection.value = affection.value + 10;
}
