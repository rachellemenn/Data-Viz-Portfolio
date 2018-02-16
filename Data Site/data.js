var content;
var button1;
var button2;
var button3;

//Find story and graph pane and the button
var contentDiv = document.getElementById("content");
// var vizDiv = document.getElementById("viz");
var button1Div= document.getElementById("button1");
var button2Div= document.getElementById("button2");
var button3Div= document.getElementById("button3");
// var button = document.getElementById("button1");
// var button = document.getElementById("button2");
// var button = document.getElementById("button3");

// //hide graph section
// vizDiv.style.visibility = "hidden";
// vizDiv.innerHTML = "";


//initalise home screen
contentDiv.innerHTML = "The content of this page will be regularly updated with more <br><br> complex versions of existing visualisations and new projects. <br><br><br> The buttons below can be used to view visualisations independently. <br><br> Alternatively, complete data stories can be viewed using the nav bar.";
// button.value = "FIRST STORY";

function show() {
  var newImage = document.getElementById("content").innerHTML = '<img src="viz/Story1Data1.png" alt="">';
  // var newImage = document.getElementById("content").style.height = "200px";
  var newImage1 = document.getElementById("content").innerHTML= '<img src="viz/Story2Data1.jpg" alt="">';
  // var newImage1 = document.getElementById("button2").style.maxHeight = "200px";
  var newImage2 = document.getElementById("content").innerHTML= '<img src="viz/Story2Data2.png" alt="">';
  // var newImage2 = document.getElementById("button3").style.maxHeight = "200px";
}

button1.addEventListener("click", show);
button2.addEventListener("click", show);
button3.addEventListener("click", show);
show();
