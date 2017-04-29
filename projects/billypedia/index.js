/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
    console.log(data.discography.topRated);
    
//TO DO 3: Style #section-bio and #section-quotes
    $("#section-bio").css("background-color", "green"); 
    $("#section-quotes").css("background-color", "pink"); 
    $("#section-praise").css("background-color", "purple");
        

//TO -DO 4: populate #list-top-rated  with billy's top rated recordings
    let topRated = data.discography.topRated;
    _.map(topRated, function(song, i, topRated){
        $("<li>").addClass("top-rated-songs").text(song["title"]).appendTo("#list-top-rated")
    })
        
        
//TO-DO 5: Populate the general recording list
    let $recordings = $("<div>").addClass("general-recordings").appendTo(".sidebar").append($("<h2 id='recordings-header'>").text("Recordings"));
    let generalRecordings = data.discography.recordings;
    console.log(generalRecordings)
    
    //this function creates a new div for each key within a song object
    function values(items){
        let val = [];
        for (var keys in items){
             val.push($("<div>").addClass(keys).text(keys + ": " + items[keys]).attr("art", items.art))
        }  return val }
    
    //this function appends those divs to the sidebar
    _.each(generalRecordings, function(item, i, generalRecordings){
        $("<li>").addClass("recording").attr("id", "recording-" + (i+1)).appendTo($recordings).append(values(item)).css("list-style", "none")
            .attr("art", item.art)
             console.log("art", item.art);})
         
        
//TO DO 6: Create Images for Recording List
    $("#recordings-header").append($("<div>").addClass("image-container").attr("id", "image-general-recordings"))
        .append($("<img id='image-general'>").attr("src", generalRecordings[0]["art"]))
        

//TO DO 7:Swap billy images on a click to the next available image
    let billyImages = data.images.billy
            var i = 1;
    $("#image-billy").click(function(){
        $("#image-billy").attr("src", billyImages[i]);
        i++
        
        if(i>=billyImages.length){
            i=0;
        }
    })
    
//TO-DO 8:
    $(".title").click(function(){
        let current = $(event.currentTarget)
        $("#image-general").attr("src", current.attr("art"));
        console.log(current.attr("art"))
    })
        
        //YOUR CODE ABOVE HERE//
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


