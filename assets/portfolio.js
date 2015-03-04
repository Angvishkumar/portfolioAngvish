"use strict";

function myFunction() {
  var selected_proj = document.getElementById("selected-dropdown");
  selected_proj= selected_proj.options[selected_proj.selectedIndex].value;

  var iframe_value = document.getElementsByTagName('iframe');
  for(var frame in iframe_value) {
    $('iframe').attr('src', selected_proj);
  }
}
