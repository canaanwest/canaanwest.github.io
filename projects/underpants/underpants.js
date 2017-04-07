// This is the proper way to start a javascript library
(function() {

// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(anything){
    return anything;
}



/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(anything){
    if (anything === null){
        return "null";
    } else if (anything instanceof Date){
        return "date";
    } else if (Array.isArray(anything)){
        return "array";
    } else {
        return typeof anything;
    }
};




/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/

_.first = function(array, number){
    if(!Array.isArray(array)){
        return [];
    } if (number < 0){
        return [];
    } if (number === undefined || typeof number !== "number"){
        return array[0];
    } else if (number > array.length){
            return array;
    } else {
        var container = [];
        for (var i = 0; i < number; i++){
                container.push(array[i]);
        } return container;
    }
};
    
    


/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/

_.last = function(array, number){
    if (!Array.isArray(array)){
        return [];
    } else if (number === undefined || typeof number !== "number"){
        return array[array.length-1];
    } else if (number < 0){
        return [];
    } else if (number > array.length){
        return array;
    } else {
        var container = [];
        for (var i = array.length-number; i<array.length; i++){
            container.push(array[i]);
        } return container;
    }
}



/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, fun){
    if (Array.isArray(collection)){
        for (var i = 0; i<collection.length; i++){
            fun(collection[i], i, collection);   
    } 
    } else if (collection instanceof Object){
        for (var keys in collection){
            fun(collection[keys], keys, collection);
        }
    }
}




/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    for (var i = 0; i<array.length; i++){
        if (value === array[i]){
            return i; 
        }  
    } return -1;
}


/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function(array, test){                   ///named the function; params array, test
    var container = [];                             //because we're filtering and don't wanna modify outside of the scope, we make a new container
    _.each(array, function(el, i, array){           //implementing "each", with params of array(same as filter funtion) and A.F. (anonymousAFfunction)
    //for (var i = 0; i<array.length; i++){         //each already did this step for us, which is why its commented out
        if (test(el, i, array) === true){           //the A.F.'s code says that if the test on the parameters comes back true, push the element to the containter
            container.push(el)}
        }) 
        return container;                           //returns the container, outside of the A.F., and outside of the each function.
};




/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, fun){                                //set the name of the function and its paramete                                 
    return _.filter(array, function(val, pos, coll){            //return the filter function; it needs the array(from reject params), and a function of its own
        return !fun(val, pos, coll);                            //this function returns NOTtrue values for the test passed in the reject filter. 
    }) 
        
}
    //we want to use the filter function, which we'll pass the collection to and an anonymous function to test whether it's true/false
    //that anonymous function will push all of the false element to our new array, which we'll return.
     
       
      

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/








_.partition = function(array, func){
    let truthy = _.filter(array, func);                           //the input function of the partition call. 
    let falsy = _.reject(array, func);                               //as a param--and that function is defined as the func param from partition, with params el, i, coll.
    let result = [truthy, falsy];                               //since we know we should have two arrays and we want it in an array, we set result to an array containing
    return result;                                              //truthy and falsy; returned the result.
    
}
                                                               //return [_.filter(array, func), _.reject(array, func)] // one line solution. filter/reject both take arrays and test functions; extra work in mine.

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/*
_.indexOf = function(array, value){
    for (var i = 0; i<array.length; i++){
        if (value === array[i]){
            return i; 
        }  
    } return -1;
}
*/

//we're comparing two values; if the container value is not equal to arr val, push arrVal to container; so for evrey number not in container, we push.
/*_.unique = function(array){
    let container = [];
    _.each(array, function(el, i, array){
    if(_.indexOf(array, container[container.length-1]) === -1){
        container.push(array[i]);    
    }

    })
    return container;
}    
    */
    
    
_.unique = function(array){
   var newArr = [];
    //we want to use indexOf, which will return the i value for an el matching a given value.
    //each can help us iterate through a list. indexOf can help us identify the position of the duplicate. 
   
   
    _.filter(array, function(val, i, array){ //the filter returns values for which the test A.F. returns true. The A.F. takes params val, i, array
        if (_.indexOf(array, val) === i)    //and tests if the value in some position in the array first occurs at i. 
        newArr.push(val);                   //if that comes back true, the value gets pushed the the array. If false, it does not.
  })
  return newArr;
}




/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/



_.map = function(collection, fun){ 
    var output = [];                            //needs somewhere to push to
    _.each(collection, function(el, i, coll){   //each iterates through
        output.push(fun(el, i, coll));          //pushes the output of the fun argument to the output container
    })
    return output;                              //return output
}




/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/




_.pluck = function(arr, prop){
    let container = [];
    _.map(arr, function(valOb, i, col){
        return container.push(valOb[prop]);
    })
    return container;
}


/*
_.pluck = function(arrObj, prop){
    return _.map(arrObj, function(el, i, coll){ //return the map function
        return arrObj[i][prop];                 //function returns 
    })
}
*/

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//NUMBER 13
_.contains = function(array, value){
    var fill = _.filter(array, function(el, i, col){
            return array[i] === value 
    })
  return fill.length > 0 ? true : false;  
} 


/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


//NUMBER 14


_.every = function(col, fun){
    let flag = true; 
    //if everything passes as true, return true;
    //if it's not true, change the flag; 
    var fill = [];

    if (fun === undefined){
       fun = _.identity;
    }
    
    _.each(col, function(el, i, col){
        if(fun(el, i, col) === false){
          flag = false;
        }
    });
    
    return flag; 
}
        
        /*if (fun(val, i, col) === true){
            return true
        } else {
            return false; 
        }
    })
};
    */
    
    /*_.each(col, function(el, i, collection){
      if (fun(el, i, collection) === false){
          return false;
      }  
          return true;
    })
}*/


//NUMBER 15




/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

        

_.some = function(col, fun){
    let flag = false;
    
    if (fun === undefined){
        fun = _.identity;
    }
    
    _.each(col, function(el, i, col){
        if(fun(el, i, col) === true){
            flag = true;
        }
    })
    
    return flag; 
    
}




//NUMBER 16

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, combine, seed){
        let 
            combined = seed, 
            i = 0; 
        
        if (combined === undefined){
            combined = array[0];
            i = 1;
        }
        for (; i<array.length; i++){
            combined = combine(combined, array[i], i, array);
        }
        
    return combined;
};



//NUMBER 17
/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(object1, object2){
    let theArgs = arguments; 
    for (var keys in object2){
        object1[keys] = object2[keys]
    }
    
    for (var i = 0; i < theArgs.length; i++){
        for (var keys in theArgs[i]){
            object1[keys] = theArgs[i][keys];
        }
    }
    return object1;

}

// This is the proper way to end a javascript library
}());
