var content;
var button;

//Find story and graph pane and the button
var contentDiv = document.getElementById("content");
// var vizDiv = document.getElementById("viz");
var button = document.getElementById("button1");
var button = document.getElementById("button2");
var button = document.getElementById("button3");

// //hide graph section
// vizDiv.style.visibility = "hidden";
// vizDiv.innerHTML = "";

// button.addEventListener("click", checkResult);

//initalise home screen
contentDiv.innerHTML = "The content of this page will be regularly updated with more <br><br> complex versions of existing visualisations and new projects. <br><br><br> The buttons below can be used to view visualisations independently. <br><br> Alternatively, complete data stories can be viewed using the nav bar.";
// button.value = "FIRST STORY";

function show() {
  var button = document.getElementById("button1").style.maxHeight = "200px";
  var button = document.getElementById("button2").style.maxHeight = "200px";
  var button = document.getElementById("button3").style.maxHeight = "200px";
}
