var content;
var button1;
var button2;
var button3;
var story1;

//Find story and graph pane and the button
var contentDiv = document.getElementById("content");
// var vizDiv = document.getElementById("viz");
var button1Div= document.getElementById("button1");
var button2Div= document.getElementById("button2");
var button3Div= document.getElementById("button3");
// var button = document.getElementById("button1");
// var button = document.getElementById("button2");
// var button = document.getElementById("button3");
var story1Div= document.getElementById("first");

var link1 = document.getElementById("text1");
var link2 = document.getElementById("text2");

// //hide graph section
// vizDiv.style.visibility = "hidden";
// vizDiv.innerHTML = "";



//initalise home screen
contentDiv.innerHTML = "The content of this page will be regularly updated with more <br><br> complex versions of existing visualisations and new projects. <br><br><br> The buttons below can be used to view visualisations independently. <br><br> Alternatively, complete data stories can be viewed using the nav bar.";
contentDiv.style.visibility = "visible";
htmlContentDiv.style.visiblity = "hidden";
// button.value = "FIRST STORY";

function show1() {
    document.getElementById("htmlcontent").style.visibility = "hidden";
    var el = document.getElementById("content");
    el.style.visiblity = "visible";
    var image1 = el.innerHTML = '<img src="viz/Story1Data1.png" alt="" style="mix-blend-mode: multiply;">';
    el.style.width = "100%";
    el.style.height = "100%";
    el.style.maxHeight = "500px";
  // var image1 = document.getElementById("content").innerHTML = '<img src="viz/Story1Data1.png" alt="">';
  //var newImage = document.getElementById("content").style.height = "200px";
}
function show2(){
  document.getElementById("htmlcontent").style.visibility = "hidden";
  var el = document.getElementById("content");
  el.style.visibilty = "visible";
  var image2 = el.innerHTML = '<img src="viz/Story2Data1.jpg" alt="" style="mix-blend-mode: multiply;">';
  el.style.width = "100%";
  el.style.height ="100%";
  el.style.maxHeight = "500px";
  // var image2 = document.getElementById("content").innerHTML= '<img src="viz/Story2Data1.jpg" alt="">';
  // var newImage1 = document.getElementById("button2").style.maxHeight = "200px";
}
function showText1(){
  document.getElementById("content").style.visibility = "hidden";
  var el = document.getElementById("htmlcontent");
  el.src = 'stories/Story1.htm';
  el.style.visibility = "visible";
  el.style.height = el.contentDocument.body.scrollHeight + 'px';
  el.style.width = '100%';
  // var image3 = document.getElementById("content").innerHTML= '<img src="viz/Story2Data2.png" alt="">';
  // var newImage2 = document.getElementById("button3").style.maxHeight = "200px";
}

function showText2(){
  document.getElementById("content").style.visibility = "hidden";
  var el = document.getElementById("htmlcontent");
  el.src = 'stories/Story2.htm';
  el.style.visibility = "visible";
  el.style.height = el.contentDocument.body.scrollHeight + 'px';
  el.style.width = '100%';
  // var image3 = document.getElementById("content").innerHTML= '<img src="viz/Story2Data2.png" alt="">';
  // var newImage2 = document.getElementById("button3").style.maxHeight = "200px";
}
// image3.style.visibility = "hidden";
// image3.innerHTML = "";

button1Div.addEventListener("click", show1);
// show1();
button2Div.addEventListener("click", show2);
// show2();
button3Div.addEventListener("click", show3);
// show3();

link1.addEventListener("click", showText1);
link2.addEventListener("click", showText2);

// function dataStory1() {
//   var dStory1 = document.getElementById("content").innerHTML='<a href="stories/Story1.htm">Data Story 1</a>';
// }
// function dataStory2() {
//   var story2 = document.getElementById("content").innerHTML='<a href="stories/Story2.htm">Data Story 2</a>';
// }
