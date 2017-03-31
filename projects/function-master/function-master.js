
//NUMBER 13
function objectValues(object){
    var array = [];
    for (var keys in object){
        array.push(object[keys]);
    }
    return array;
}

//console.log(objectValues({name: "Canaan", age: 25}));

//NUMBER 14
function keysToString(object){
    var myKeys = Object.keys(object);
    return myKeys.join(" ");
   
}


//NUMBER 15
function valuesToString(object){
    var keys = Object.keys(object);
    var stringValues = [];
    for (var i = 0; i < keys.length; i++){    
        if (typeof object[keys[i]] === 'string'){
            stringValues.push(object[keys[i]]);
        }
        
    } return stringValues.join(" ");
}


//NUMBER 16
function arrayOrObject(arg){
    if (Array.isArray(arg)){
        return 'array';
    } else if (arg === null || arg instanceof Date){
         return ""
    } else if (typeof arg === 'object'){
             return 'object';
         }
}


//NUMBER 17

function capitalizeWord(string){
     return string.charAt(0).toUpperCase() + string.slice(1);
}


//NUMBER 18

function capitalizeAllWords(string){
    var split = string.split(" ");
    var toUpper = [];
        for (var i = 0; i < split.length; i++){
            toUpper.push(split[i].charAt(0).toUpperCase() + split[i].slice(1));    
    }
    
    return toUpper.join(" ");
}

//NUMBER 19
function welcomeMessage(object){
    if (object.hasOwnProperty("name") === true){
        object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1)
        return "Welcome " + object.name + "!";
    }
}    


//NUMBER 20

function profileInfo(object){
    if (object.hasOwnProperty("name") && object.hasOwnProperty("species")){
       object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
       object.species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
       return object.name + " is a " + object.species;
    } 
}


//QUESTION 21
function maybeNoises(object){
    if (object.hasOwnProperty("noises") && Array.isArray(object.noises)){
        if (object.noises.length > 0){
            return object.noises.join(" "); 
        } return "there are no noises";
    } return "there are no noises";
        
}



// QUESTION 22
function hasWord(string, word){
    var array = string.split(" ");
    for (var i = 0; i < array.length; i++){
        if (array[i].toLowerCase() === word.toLowerCase()){
            return true;
        } 
   
        } return false;
    }   




// QUESTION 23

function addFriend(name, object){
    object.friends.push(name);
    return object; 
}


//QUESTION 24

function isFriend(name, object){
    if (object.friends){
            for (var i = 0; i < object.friends.length; i++){
                if (name === object.friends[i]){
                    return true;
                }
            }
    } return false;
}

// QUESTION 25

function nonFriends(name, list){
    var notFriends = [];
    for (var i = 0; i<list.length; i++){
        if (name !== list[i].name){
            if (!isFriend(name, list[i])){
                    notFriends.push(list[i].name);
                }
            }
        } return notFriends;

    } 

//QUESTION 26

//updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

function updateObject(object, key, value){
   object[key] = value;
    return object;
    
}


//QUESTION 27:

function removeProperties(object, arrayStrings){
    for (var i = 0; i<arrayStrings.length; i++){
            if (object.hasOwnProperty(arrayStrings[i])){
                delete object[arrayStrings[i]];
            }
        } 
    }


//QUESTION 28

function dedup(array){
    var newArray = [array[0]]
    for (var i = 0; i<array.length; i++){
        if (newArray[newArray.length-1] !== array[i]){
            newArray.push(array[i]);
        }
    } return newArray;
}
