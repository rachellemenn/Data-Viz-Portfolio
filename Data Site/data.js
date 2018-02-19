var content;
var button1;
var button2;
var button3;
var story1;

//Find story and graph pane and the button
var contentDiv = document.getElementById("content");
var button1Div= document.getElementById("button1");
var button2Div= document.getElementById("button2");
var button3Div= document.getElementById("button3");
var story1Div= document.getElementById("first");

var link1 = document.getElementById("text1");
var link2 = document.getElementById("text2");


//initalise home screen
document.getElementById("htmlcontent").style.visibility = "hidden";
contentDiv.innerHTML = "The content of this page will be regularly updated with more <br><br> complex versions of existing visualisations and new projects. <br><br><br> The buttons below can be used to view visualisations independently. <br><br> Alternatively, complete data stories can be viewed using the nav bar.";
contentDiv.style.visibility = "visible";
contentDiv.style.visiblity = "hidden";

function show1() {
    document.getElementById("htmlcontent").style.visibility = "hidden";
    var el = document.getElementById("content");
    el.style.visiblity = "visible";
    var image1 = el.innerHTML = '<img src="viz/Story1Data1.jpg" alt="" style="mix-blend-mode: multiply;">';
    el.style.width = "100%";
    el.style.height = "100%";
    el.style.maxHeight = "500px";
    el.image1.width = "300px";
    el.image1.height = "200px";

}

function show2(){
  document.getElementById("htmlcontent").style.visibility = "hidden";
  var el = document.getElementById("content");
  el.style.visibilty = "visible";
  var image2 = el.innerHTML = '<img src="viz/Story2Data1.jpg" alt="" style="mix-blend-mode: multiply;">';
  el.style.width = "80%";
  el.style.height ="80%";
  el.style.maxHeight = "100px";
}

function show3(){
  document.getElementById("htmlcontent").style.visibility = "hidden";
  var el = document.getElementById("content");
  el.style.visibilty = "visible";
  var image2 = el.innerHTML = '<img src="viz/Story2Data2.png" alt="" style="mix-blend-mode: multiply;">';
  el.style.width = "80%";
  el.style.height ="80%";
  el.style.maxHeight = "500px";
  image2.style.width = "100px";
  image2.style.height = "200px";
}

function showText1(){
  document.getElementById("content").style.visibility = "hidden";
  var el = document.getElementById("htmlcontent");
  el.src = 'stories/Story1.htm';
  el.style.visibility = "visible";
  el.style.height = el.contentDocument.body.scrollHeight + 'px';
  el.style.width = '90vw';
}

function showText2(){
  document.getElementById("content").style.visibility = "hidden";
  var el = document.getElementById("htmlcontent");
  el.src = 'stories/Story2.htm';
  el.style.visibility = "visible";
  el.style.height = el.contentDocument.body.scrollHeight + 'px';
  el.style.width = '100%';
}

button1Div.addEventListener("click", show1);
button2Div.addEventListener("click", show2);
button3Div.addEventListener("click", show3);

link1.addEventListener("click", showText1);
// contentDiv.innerHTML = "UK Cycling Incidents Occur 80 Percent of The Time in Urban Areas";
link2.addEventListener("click", showText2);
