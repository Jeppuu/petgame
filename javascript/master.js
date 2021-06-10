//the text inside the speech bubble
const message = document.getElementById('pet-message');

//assign the pet's stats into variables
const hunger = document.getElementById('hunger-stat');
const enjoyment = document.getElementById('enjoyment-stat');
const dirtyness = document.getElementById('dirtyness-stat');
const affection = document.getElementById('affection-stat');

//the pet objects
function Pet (name) {
  this.name = name;
}
let dog = new Pet('Rufus');
let cat = new Pet('Misty');
let parrot = new Pet('Jacky');

//pet's name, just hanging out here doing nothing
petName = document.getElementById('pet-name-input').value;




//functions for the action buttons
//change the message and raise stats
function feed () {
  message.innerHTML = "Yum, my favourite treat!";
  hunger.value = hunger.value + 10;
}
function play () {
  message.innerHTML = "*laugh* Playing together is fun!";
  enjoyment.value = enjoyment.value + 10;
}
function bathe () {
  message.innerHTML = "Thanks, I'm all clean now!";
  dirtyness.value = dirtyness.value + 10;
}
function pat () {
  message.innerHTML = "Aw, I love pats!";
  affection.value = affection.value + 10;
}
