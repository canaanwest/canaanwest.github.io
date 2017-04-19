/* globals $ _ */

//asyncronous because we don't know how long it will take. so we use the A.F., called a callback function or callback pattern, meaning it does the event when the event that is being listened for is heard.
$(document).on("ready", onDocReady); 

function onDocReady(){ //this tells js to wait for a ready event. waits for the DOM to be fully ready; otherwise, it will execute before the doc is ready. 
    console.log("DOM is ready!");
$.getJSON("data/product.json", onProductData)
.fail(function(){console.log("getJSON on product.json failed")})
    
}

function onProductData(products){
    console.log(products);
    //initalize ui
    initalizeUI(products); 
    //show all products
    showProducts(products); 
}    

function initalizeUI(products){
    //create static product UL
    $("<ul>")
        .attr("id", "products")
        .addClass("list-products")
        .appendTo("main");
}
    
    
function showProducts(products){
    //needs to work at the outset, when the user does a keyword search, or when the user uses the filter
    //clear the DOM
    $("#products")
        .empty() //this empties any of the products that are in the DOM.
        .append(createProductListItems(products));
        //add event listeners to handle the clicks
}

function createProductListItems(products){
    //map has to return some transformation of the products array
    return _.map(products, function(product){
        return $("<li>")
            .addClass("li-product")
            .data("product", product)
            //wrap your image in a div
            .text(product.desc)
            .append(createProductImageDiv(`img/product/thumbs/${product.img}`, "product-thumb"))
            .append(createProductDetailsDiv(product.desc, product.price, product.stock))
    })
}

function createProductImageDiv(url, cssClass){
  //use jQ to create and return div that wraps an image that uses the url as its src.
  return $("div")
};

function createProductDetailsDiv(desc, price, stock){
    //create div with 3 child divs, one for each param, give each a unique class.
}

function onProductClicked(event){
    const product = $(event.currentTarget).data("product"); 
    showProductDetails(product);
}


function showProductDetails(product){
    //create markup (use $ to create the html to render the product details) for product detail
    //show it in a pop up
}


//SEARCH FUNCTION

function search(collection, term){
    //1. create something to collect your output
    //2. iterate through your collection //each, reduce, could probably do it with filter, and you HAVE TO HIT every object
    

    _.reduct(collection, function(values){
         //recursive case://
    //1. is this value a collection?
    //2. if yes call search(value, term)
    //3. we could check the length of the inner "output array"; if the recursive case comes back with any length, we know we want to push the product to the outer array 
    
    //base case: //
    //1. is it a string? 2. does it contain the search term? 3. if yes, collect the product into the output; else 
    //search should be case insensitive
        
    })
    
  //return the output collection (which schould be an array)
    
}




function isCollection(value){
    //is it a collection??
}


//remember that functions assigned to constants like this are only stored in memory at the time they are written.
/*const onDocReady = function(){
    $(document).off("ready", onDocReady);   // this allows us to remove an event listener by passing it an event and the HANDLER (the function, which must be named)
    console.log("DOM is ready");        //after this point, it's no longer listening for the event. 
}*/