// ****** Lightbox for NASA API Image URLs ****** //

$(document).ready(function() { // ****** Begin Document Ready Anonymous Function ****** //

// ****** Lightbox Element Declarations ****** //
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var $closer = $('<br><p style="font-size: 1em;">(Click to close)</p>');

// ****** Append Lightbox Elements to Overlay ****** //
$overlay.append($image);
$overlay.append($caption);
$overlay.append($closer);

// ****** Append Overlay to Body Element ****** //
$("body").append($overlay);


// ****** Capture the click event on the way to an image ****** //
$('#container a').click(function(event) {
    event.preventDefault();
    $("#overlay").fadeIn("fast", function(){

    });
    var imageLocation = $(this).attr("href");
    console.log(imageLocation);

    // ****** Update overlay with the image linked in the link ****** //
    $image.attr("src", imageLocation);


    // ****** Show the overlay ****** //

    $overlay.show();

    // ****** Get child's alt attribute and set caption ****** //
    var captionText = $(this).children("img").attr("title");
    $caption.text(captionText);

});

// ****** Opted not to address possibility of iframe video modal ****** //
// Enabled "allowfullscreen" attribute on iframe element instead (see index.html) //


// ****** When the overlay is clicked, hide overlay ****** //

$overlay.click(function() {

    $(overlay).hide();

});


});  // ****** End Document Ready Anonymous Function ****** //