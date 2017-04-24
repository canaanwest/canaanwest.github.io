/* globals $ _ */

//call-back pattern - event driven architech
$(document).ready(function() {
    $.getJSON('data/product.json', onProductData);
});

function onProductData(products) {
    //initilaize ui 
    initilaizeUI(products);
    showProducts(products);
    findMyTerm(products);
    filterAutoPopulate(whatInDatFilter(products))
    filterBy(products)
    ifAnythingClicked(products);
    lightBox(products)
    pricesArray(products);
    highToLow(products); 
    hideDirections(products); 
}

//create product ul 
function initilaizeUI(products) {
    $('<ul>')
        .attr('id', 'products')
        .addClass('list-products')
        .appendTo('main');
}

//show all products showProducts(products) 

function showProducts(products) {
    //clear any products in dom - using empty function 
    $('#products')
        .empty()
        .append(createProductListItems(products));
        lightBox(products)
        findMyTerm(products)
        //add event listerners 
}

//create all list items 

function createProductListItems(products) {
    return _.map(products, function(product) {
         return  $('<li>') //outer box
            .addClass('li-product')
            .data('product', product)
            //desc, price, stock, image(wrap in a div) factories 'FLEXBOX!'
            //.text(product.desc)
            .append(createProductImageDiv(`img/product/thumbs/${product.image}`, 'product-thumb'))
            .append(createProductsDetailsDiv(product.desc, product.price, product.stock))
            .append(createProductImageDiv(`img/product/${product.image}`, 'product-image').hide())
            .attr("image", product.image)
            .attr("desc", product.desc)
            .attr("type", product.type)
            .attr("availableColors", product.availableColors)
            .attr("specs", product.specs)
            .attr("price", product.price)
            .attr("stock", product.stock);
        
    }); 
}

 
function createProductImageDiv(url, cssClass) {
  //use jquery to create and return a div that wraps an image that uses the url as its src   
    //cssClass makes more flexible 
        return $('<div>')
            .append("<img src='" + url + "'>")
            .addClass(cssClass)
            
          //  .data('product', url)
       // $(".li-product").prepend( '<img class="thumb" src="img/product/thumbs/edge-gold.jpg">');
 }

function createProductsDetailsDiv(desc, price, stock){
    return $("<div>")
            .addClass("product-details")
            .append($("<div>").addClass("product-description").text(desc))
            .append($("<div>").addClass("product-price").text("Yours for $" + price + "!!"))
            .append($("<div>").addClass("product-stock").text("Items Remaining: " + stock));
    
    
    //create div with 3 children divs, one for desc, one for price, one for stock 
    // give each a unique class
}


//THIS WORKS
function findMyTerm(products){
$("#search-me-pls").on("click", function(){
    let term = $("input.form-control").val();
    showProducts(search(products, term));
    lightBox(products); 
});
}

//RECURSIVE SEARCH FUNCTION HAS A BUG
function search(products, term){
    // 1. create output array to collect your output []
    // 2. iterate collection .each or .reduce(hipper)   
    return _.reduce(products, function(previousProducts, currentProduct, i, product){
          if(isCollection(currentProduct)){
            if (search(currentProduct, term).length){
                previousProducts.push(currentProduct); 
            }
        } 
        
        else if (typeof currentProduct === "string"){
            if(currentProduct.toLowerCase().search(term.toLowerCase()) > -1){
                 previousProducts.push(currentProduct); 
            }
        }  
        return previousProducts;
        
    }, []);

}

// iscollection, scratchpad - is array or object? 
    //is this value a collection?
    //IF yes, call search(value, term)
    
    // base case: IF is this a string?(*subsearch* / substring) & IF this string contain search term? (must be case insensitve)
                //3.  IF yes, collect this product into your output array 
    //recurisve function 
    //has own array??? "match" value is pushed into array, resolves to result of calling search IF subsearch match 
    //IF search.length 0 = falsy 
    //value = product  (can happen many times because nested structure)
     //return the output thingy (collection) array 


function isCollection(value) {
    if(value === "null"){
        return false;
    } else if (value instanceof Date){
        return false;
    } else if (Array.isArray(value)){
        return true;
    } else if (typeof value === "object"){
        return true;
    } else if (typeof value !== "object"){
      return false;
    }
    //is this value an array or true object 
      // iscollection, scratchpad - is array or object? 
}






//FILTER FUNCTIONS
//identify the product type, puts the type into an object if it's not there; pushes the object for the item to an array in the approprate "type" key
function whatInDatFilter(products){
    var container = {};
    _.reduce(products, function(filteredProds, currentProd, i, products){
        if(!container.hasOwnProperty(currentProd["type"])){
            container[currentProd["type"]] = [currentProd]; 
        } else if (container.hasOwnProperty(currentProd["type"])) {
             container[currentProd["type"]].push(currentProd);
    }}, {});
    
    return container;
    

}

 
 // THIS WORKS! //iterate through the output of whatInDatFilter to autopopulate dropdown w/info
function filterAutoPopulate(products){
    var theFilter = _.each(products, function(val, key, products){
        $("<li>").addClass("filtered-products").attr("id", key).text(key + "s " + " (" + val.length + ") ").prependTo(".dropdown-menu").append($("<li>").addClass("divider").appendTo(".dropdown-menu"));
})
        $("<li>").addClass("prices-low-to-high").attr("id", "prices-low-to-high").text("Prices: Low to High").prependTo(".dropdown-menu").append($("<li>").addClass("divider").appendTo(".dropdown-menu"));
        $("<li>").addClass("prices-high-to-low").attr("id", "prices-high-to-low").text("Prices: High to Low").prependTo(".dropdown-menu").append($("<li>").addClass("divider").appendTo(".dropdown-menu"));; 
        $("<li>").addClass("anything").attr("id", "any-product").text("All Products").appendTo(".dropdown-menu");
 
}



function filterBy(products){
    $(".filtered-products").click(function(){
        let productType = $(event.currentTarget); //this allows the program to focus in and identify different attr of the clicked item
        showProducts(whatInDatFilter(products)[productType.attr("id")]); //makes use of the event.currentTarget to call the ID of the current target as the key of the output object of the functioncall
        
    });
    
    /////////////////////////
    //PERHAPS we want this filter to narrow in on another filter we've already selected?????
     $(".prices-low-to-high").click(function(){
        let productType = $(event.currentTarget); //this allows the program to focus in and identify different attr of the clicked item
        showProducts(lowToHigh(products)); //makes use of the event.currentTarget to call the ID of the current target as the key of the output object of the functioncall
    });

     $(".prices-high-to-low").click(function(){
        let productType = $(event.currentTarget); //this allows the program to focus in and identify different attr of the clicked item
        showProducts(highToLow(products)); //makes use of the event.currentTarget to call the ID of the current target as the key of the output object of the functioncall
         
     })
        
        
    };
    

function ifAnythingClicked(products){
    $(".anything").click(function(){
        return showProducts(products); 
    })

}



function pricesArray(products){
  let output = []
  _.each(products, function(val, i, products){
       output.push(val.price)})
    output.sort(function(a, b){
        return a-b;
    });
   return _.unique(output); 
}

function lowToHigh(products){
    let orderedArray = [];
    _.each(pricesArray(products), function(val, pos, prices){
        _.each(products, function(item, i, products){
            //console.log("prices", val); 
            if(item.price === prices[pos]){
                orderedArray.push(item); 
        }
        })
    })
    return orderedArray; 
}

//on click function to call this and pass it to showProducts()
function highToLow(products){
    let orderedArray = [];
    _.each(pricesArray(products).reverse(), function(val, pos, prices){
        _.each(products, function(item, i, products){
            //console.log("prices", val); 
            if(item.price === prices[pos]){
                orderedArray.push(item); 
        }
        })
    })
    return orderedArray; 
}

    
    
//NOTES for FILTERBY
    //needs a click event handler
    //needs to call the showProducts function for those products with the "type" key matching the id of the clicked;
    //the relevant items are already in an array inside of the object created by the whatInDatFilt er
    /*_.each(products, function(val, i, products){
    if (products["type"] === event.currentTarget.attr("id")){
        relevantProducts.push(val);*/
    //identify the product type
    //select by product type when clicked. $(filtertab).on("click", function that pulls up the items that match the type)


//LIGHTBOX


//lightbox
//lightbox
//lightbox

function lightBox(products) {
    $('.li-product').on("click", function(event) {
        let product = $(event.currentTarget) // pulling data from object clicked
        let src = product.attr("image"); 
       // let details = showProductDetails(product); 
       // console.log(details); 
    /*    $(".recordings-title").click(function() {
        let recordingArt = $(event.currentTarget);
        console.log(recordingArt);
        $(".image-recordings").attr('src', recordingArt.attr('art'));
    });
        */
        
    
    if (!$("#light-box").length > 0) {
      $("body").append("<div id='light-box'>") //<img src='img/product/"  + src + "'><span class='material-icons'>CLOSE</span></div>")
      //$("<img class='light-box-image' src='img/product/"  + src + "'>")//.appendTo("#light-box")
      $("<span class='material-icons'>CLOSE</span>").appendTo("#light-box")
      $("<div>").addClass("product-detail-text").appendTo("#light-box")
        .append($("<div id='light-box-image'><img class='light-box-image' src='img/product/"  + src + "'>"))
           // .append("<li>").text(product.attr("image"))
        .append($("<div id='product-detail-text'>"), 
                $("<li>").attr("id", "detail-text").text("This " + product.attr("type").toUpperCase() + " can be yours for $" + product.attr("price") + "!"),
                $("<li>").attr("id", "detail-text").text(product.attr("desc")),
                $("<li>").attr("id", "detail-text").text("Available in " + product.attr("availableColors")),
                $("<li>").attr("id", "detail-text").text("CHECK THE SPECS: " + product.attr("specs")),
                $("<li>").attr("id", "detail-text").text("Number Remaining: " + product.attr("stock")));
     // $("#light-box").append("<li>").data("data", src);
      $("#light-box").show();
      $(".search-bar").hide();
     
      
       $("body").on("click", "#light-box span", function() {
    $("#light-box").remove();
     $(".search-bar").show();
       
   })
    } else {
        $("#light-box").show();
        $(".search-bar").hide();
        $("body")
      //.append("<div id='light-box'><img class='light-box-image' src='img/product/"  + src + "'><span class='material-icons'>CLOSE</span></div>");
        $("body").on("click", "#light-box span", function() {
            $("#light-box").remove()
                $(".search-bar").show();

   })
    }
  });
 
  }
  
function hideDirections(products){
    $("#btnDirections").hide(); 
}