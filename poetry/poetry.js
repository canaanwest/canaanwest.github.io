/* globals $ _ */

$(document).ready(function(){
    onPoetryData;
})

function onPoetryData(poems){
    showMoreInfo(poems);
}



function showMoreInfo(poems){
    $(".poetry").click(function(){
         console.log("A CLICK!")
})
}

function lightbox(poems){
    //pulls up an extended poem in a lightbox; 
    //want lightbox to include a next/back button
    //as well as universal click to exit
}

function search(poems){
    //recursive function that searches by keywork
    //can look through title, text, keywords, author
    //can I get it to highlight the relevant information?
    //
}

//I think I need a document where I put the poems and then can upload them to the DOM? like a JSON file? 
//How can I make a JSON file?