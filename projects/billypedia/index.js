/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $("div").css("color", "rgb(79, 96, 96)").css("font-family", "serif").css("border-radius", "4px")// this is the whole div
        $("#section-bio").css("background-color", "rgb(157, 221, 162)").css("border-radius", "4px").css("padding-left", "10px").css("width", "95%")
        $("#section-praise").css("background-color", "rgb(157, 221, 162)").css("border-radius", "4px").css("padding-left", "10px").css("width", "95%").css("padding-bottom", "10px")
        $("#section-quotes").css("background-color", "rgb(157, 221, 162)").css("border-radius", "4px").css("padding-left", "10px").css("width", "95%").css("padding-bottom", "10px")
        
        // uncomment this to inspect all available data; delete when done //
         console.log(data.rider);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        let theRecordings = data.discography.recordings;
         
        _.map(topRated, function(recording, i, topRated) {
            $("<li>").text(recording.title).appendTo("#list-top-rated").addClass("title-top-rated")
                .attr("art", recording.art);
        });
        
        //topRated[i] === recording
    
        
        //NUMBERS 3 and 4
        let $recordings = $("<section>").attr("id", "section-recordings").appendTo($("#sidebar"));
        let $newList = $("<ul>").attr("id", "list-recordings").appendTo($recordings);
        let $header = $("<h2>").text("Recordings").prependTo($recordings).attr("class", "recording");


        var recordingSection = _.map(theRecordings, function(val, i, obj){
            $("<li>").attr("class", "recording").appendTo("#list-recordings").text("Song " + (i+1) + ":").css("font-weight", "bold");
            $("<div>").text("Title: " + val.title).appendTo("#list-recordings").attr("class", "recordings-title").attr("art", val.art);;
            $("<div>").text("Artist: " + val.artist).appendTo("#list-recordings").attr("class", "artist");
            $("<div>").text("Relase: " + val.release).appendTo("#list-recordings").attr("class", "release");
            $("<div>").text("Year: " + val.year).appendTo("#list-recordings").attr("class", "year")
        })
        
    
        //Six: Create Images for Recording Lists: Use $ to add an image to the top of the sections for
        let $topRatedImgContainer = $("<div>").attr("id", "image-container-top-image").prependTo($("#list-top-rated"));
        let $recordingsContainer = $("<div>").attr("id", "image-container-recording").prependTo($("#list-recordings"));
        let topImages = data.discography.topRated;
        let recordingsImages = data.discography.recordings;
        
       /* _.each(topImages, function(val, i, coll){
            if(recordingSection[0] === val){
                $("#recording-image").attr("src", "\val.art").appendTo($topRatedImgContainer); 
            }
        })*/
        
          /*_.each(recordingsImages, function(val, i, coll){
            if(recordingSection[0] === val){
                $("#recording-image").attr("src", "\val.art").appendTo($recordingsContainer); 
            }
        })*/
        
        
        let topRatedsongpic = '<img class="image-top-rated" src="' + topRated[0].art + '">'
        let recordingsImagessongpic2 = '<img class= "image-recordings" src="' + recordingsImages[0].art + '">'
        
        $($topRatedImgContainer).prepend(topRatedsongpic).addClass("image-container").css("margin-left", "25PX")
            $($recordingsContainer).prepend(recordingsImagessongpic2).addClass("image-container")
        
        
        
        
        //top rated and recordings. By default, show the image that corresponds to the first recording
        //in each list.
        
        
        //NUMBER 7:
        
        var billyPics = data.images.billy;
            var i = 1;
            $('#image-container-billy').click(function() {
                $('#image-billy').attr('src', billyPics[i])
                i++;
                if (i >= billyPics.length) {i = 0;}});
            
            
        //NUMBER 8:
        // top- rated photo selectors  
    $(".title-top-rated").click(function() {
        let topArt = $(event.currentTarget);
        $(".image-top-rated").attr('src', topArt.attr('art'));
    });
    //list- recording photo selectors 
    $(".recordings-title").click(function() {
        let recordingArt = $(event.currentTarget);
        console.log(recordingArt);
        $(".image-recordings").attr('src', recordingArt.attr('art'));
    });
        
        
        
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
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


