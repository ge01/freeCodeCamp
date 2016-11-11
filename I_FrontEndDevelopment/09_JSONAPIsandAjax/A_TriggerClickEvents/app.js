console.clear();

$(document).ready(function() {
 $("#getMessage").on("click", function() {
   $.getJSON("https://crossorigin.me/https://www.freecodecamp.com/json/cats.json", function(json) {
      $(".message").html(JSON.stringify(json));
    });
 });
});
