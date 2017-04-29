/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
    console.log(data.discography.topRated);
    
//TO DO 3: Style #section-bio and #section-quotes
         $("div").css("color", "rgb(79, 96, 96)").css("font-family", "serif").css("border-radius", "4px")// this is the whole div
        $("#section-bio").css("background-color", "rgb(157, 221, 162)").css("border-radius", "4px").css("padding-left", "10px").css("width", "95%")
        $("#section-praise").css("background-color", "rgb(157, 221, 162)").css("border-radius", "4px").css("padding-left", "10px").css("width", "95%").css("padding-bottom", "10px")
        $("#section-quotes").css("background-color", "rgb(157, 221, 162)").css("border-radius", "4px").css("padding-left", "10px").css("width", "95%").css("padding-bottom", "10px")

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
            .attr("art", item.art)})
         
         $(".art").hide();
         $(".title").css("font-weight", "bold");
        
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
    })
        
        
        
        //NUMBER 9:
    //Example Table modified:
    var createTable = function(rider){
    var createRow = function(piece){
        var $row = $("<tr>");
        var $type = $("<td>").text(piece.type);
        var $description = $("<td>").text(piece.desc);
        $row.append($type);
        $row.append($description);
        return $row;
    }
    var $table = $("<table>");
    var $rows = rider.map(createRow);
    $table.append($rows);
    return $table;
};
let rider = data.rider;
let $riderTableSection = $("<section>").attr("id", "section-table").appendTo($("#sections"))  
let $table = createTable(rider).appendTo($riderTableSection)
let $riderHeader = $("<h3>").text("Billy's Rider").prependTo("#section-table").addClass("heading heading-rider");
($riderTableSection).css("background-color", "rgb(157, 221, 162)").css("border-radius", "4px").css("padding-left", "10px").css("padding-top", "0px").css("width", "95%").css("padding-bottom", "10px"); 
        
        
        
//MORE CSS STYLINGS, after the fact:
$("#sidebar").css("background-color", "rgb(206, 172, 148)").css("border-radius", "2px");
$("#section-top-rated").css("border", "solid").css("border-color", "black").css("padding", "10px").css("color", "#4f4e4d"); 
$("#section-recordings").css("border", "solid").css("border-color", "black").css("color", "#4f4e4d")
$("nav").css("background-color", "#F5357D"); 

$(".image-top-rated").css("padding-bottom", "10px")
$(".image-recordings").css("padding-bottom", "10px")

        //YOUR CODE ABOVE HERE//
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


