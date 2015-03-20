"use strict";

var imageElement = document.querySelector('.logo');
// default options
var defaults = {
  colorMode: 'color',
  compositeOperation: 'lighten',
  iterationLimit: 0,
  key: 'high',
  lineWidth: 0.001,
  lineMode: 'point',
  origin: ['right', 'top'],
  outputSize: 'original',
  pathFinderCount: 500,
  speed: 1,
  turningAngle: Math.PI
};

var chromata = new Chromata(imageElement, defaults);
chromata.start();

function myFunction() {
  var selected_proj = document.getElementById("selected-dropdown");
  selected_proj= selected_proj.options[selected_proj.selectedIndex].value;

  var iframe_value = document.getElementsByTagName('iframe');
  for(var frame in iframe_value) {
    $('iframe').attr('src', selected_proj);
  }
}
