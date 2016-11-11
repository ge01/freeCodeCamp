console.clear();

$(document).ready(function() {
 $("#getMessage").on("click", function() {
   $.getJSON("https://crossorigin.me/https://www.freecodecamp.com/json/cats.json", function(json) {
     var html = "";

     json.forEach(function(val) {

       html += "<div class = 'cat'>";

       // Only change code below this line.
       html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";


       // Only change code above this line.

       html += "</div>";

     });

        $(".message").html(html);
    });
 });
});
