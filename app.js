// ****** AJAX Request from NASA's Astronomy Photo of the Day (APOD) API ****** //
// ****** Utilizing API key ****** //

var url = "https://api.nasa.gov/planetary/apod?concept_tags=TRUE&api_key=H4sxtxtRMj9U4glpSgG7sOp2dMOqWdtLMCdbhQeY&format=JSON";

$(document).ready(function() { // ****** Begin Document Ready Anonymous Function ****** //

    // ****** AJAX Method ****** //
    $.ajax({
      url: url,
      success: handleResult
    });

    // ****** Callback Function ****** //
    function handleResult(result){

      if(result.media_type == "video") { // ****** Media_Type = video ****** //
        $("#apod_img_id").css("display", "none"); 
        $("#apod_vid_id").attr("src", result.url);
      }

      else { // ****** Media_Type = image ****** //
        $("#apod_vid_id").css("display", "none"); 
        $("#apod_img_id").attr("src", result.url);
      }

      // ****** Set HTML IDs from API Returned Properties ****** //
      $("#reqObject").text(url);
      $("#apod_explaination").text(result.explanation);
      $("#apod_title").text(result.title);
      $("#image-link").attr('href', result.url);
      $("#apod_img_id").attr('alt', result.title);
      $("#apod_img_id").attr('title', result.title);
    }

    // ****** Custom JavaScript Date Object Formatting ****** // 
    var today = new Date();

      // ****** Obtain the Day of the Week ****** //
      var dayOfWeek = today.getDay(); //returns day number from 0 to 6
      var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      for (var i = 0; i <= 11; i++) {
        if (i === dayOfWeek) {
          document.getElementById('day').innerHTML=(dayArray[i] + ',   ');
        }
      }         

      // ****** Obtain the Current Month ****** //
      var month = today.getMonth(); //returns month number from 0 to 11
      var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      for (var i = 0; i <= 11; i++) {
        if (i === month) {
          document.getElementById('month').innerHTML=(' ' + monthsArray[i] + ' ');
        }
      } 

      // ****** Obtain the Date ****** //
      var numDate = today.getDate(); //returns day number from 0 to 31
      document.getElementById('date').innerHTML=(' ' + numDate + ' ');   
  
}); // ****** End Document Ready Anonymous Function ****** //