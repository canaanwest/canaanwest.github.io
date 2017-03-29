var animal = {};

animal.species = "mollusc";
animal["name"] = "Marvelous Molly";
animal.noises = [];


var noises = [];
noises[0] = "bubble bubble";
noises.push("blop blop");
noises.unshift("gurgle gurgle");
noises[noises.length] = "ehhhhhhhhhhhhhhhhhhhhh";

animal["noises"] = noises;
animal["noises"].push("click click click");

var animals = [];

animals.push(animal);

var duck = {
    species: "duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "woosh"]
};

animals.push(duck);

var pygmyHippo = {
    species: "hippopotamus",
    name: "Stan",
    noises: ["snort", "urrgh", "splash"]
};

var penguin ={
    species: "spheniscidae",
    name: "Stefanie",
    noises: ["beep", "chrip"]

};

animals.push(pygmyHippo, penguin);


var list = [];
// array because it allows us to reference our friends by index and we can put objects in it

var friends = list;

function randomAnimal (array) {
    
    return array[Math.floor(Math.random() * ((array.length) - 0)) + 0];
}

friends.push(randomAnimal(animals)["name"]);

animals[1]["friends"] = friends;

//PART 2:

function search(animalName){
   for (var i = 0; i < animals.length; i++){
       if (animalName.toUpperCase()  === animals[i]["name"].toUpperCase() ){
           return animals[i];
       }
   } return null;
 }

function edit(animalName, object){
   for (var i = 0; i < animals.length; i++){
       if (animalName === animals[i]["name"]){
           return animals[i] = object;
       }
   }
}

function remove(animalName){
   for (var i = 0; i < animals.length; i++){
       if (animalName === animals[i]["name"]){
           return animals.splice(i, 1);
       }
   }
}



function create(object){
   if (object.hasOwnProperty("name") && object["name"].length > 0){
       if (object.hasOwnProperty("species") && object["species"].length > 0){
           for (var i = 0; i<animals.length; i++){
               if (object["name"].toLowerCase()  === animals[i]["name"].toLowerCase() ) {
                   return "";
           } 
       } return animals.push(object);
          
       }  
   }  
}
