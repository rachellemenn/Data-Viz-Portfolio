// var content;
// var button1;
// var button2;
// var button3;
// var story1;

//Find story and graph pane and the button
// var contentDiv = document.getElementById("content");
var button1Div= document.getElementById("button1");
var button2Div= document.getElementById("button2");
var button3Div= document.getElementById("button3");
// var story1Div= document.getElementById("first");

console.log(button1Div);
console.log(button2Div);
console.log(button3Div);

var link1 = document.getElementById("text1");
var link2 = document.getElementById("text2");
console.log(link1);
console.log(link2);

var htmlContent = document.getElementById("htmlcontent");
var imageContent = document.getElementById("content");
var parentContainer = htmlContent.parentElement;

console.log(htmlContent);
console.log(imageContent);
console.log(parentContainer);

//initalise home screen
cleanupContent();
parentContainer.appendChild(imageContent);
imageContent.innerHTML = "The content of this page will be regularly updated with more <br><br> complex versions of existing visualisations as well as new projects.";

function cleanupContent() {
    while (parentContainer.children.length > 1) {
        parentContainer.removeChild (parentContainer.children[1]);
    }
}

console.log("loaded cleanupContent");

// document.getElementById("htmlcontent").style.visibility = "hidden";
// contentDiv.innerHTML = "The content of this page will be regularly updated with more <br><br> complex versions of existing visualisations and new projects. <br><br><br> The buttons below can be used to view visualisations independently. <br><br> Alternatively, complete data stories can be viewed using the nav bar.";
// contentDiv.style.visibility = "visible";
// contentDiv.style.visiblity = "hidden";

function show1() {
    cleanupContent();
    parentContainer.appendChild(imageContent);
    imageContent.innerHTML ='<img src="viz/Story1Data1.jpg" alt="" style="mix-blend-mode: multiply;">';
    // document.getElementById("htmlcontent").style.visibility = "hidden";
    // var el = document.getElementById("content");
    // el.style.visiblity = "visible";
    // el.style.width = "100%";
    // el.style.height = "100%";
    // el.style.maxHeight = "500px";
}

console.log("loaded show1");

function show2(){
  cleanupContent();
  parentContainer.appendChild(imageContent);
  imageContent.innerHTML ='<img class="viz" src="viz/Story2Data1.jpg" alt="">';
  // document.getElementById("htmlcontent").style.visibility = "hidden";
  // var el = document.getElementById("content");
  // el.style.visibilty = "visible";
  // var image2 = el.innerHTML = '<img src="viz/Story2Data1.jpg" alt="" style="mix-blend-mode: multiply;">';
  // el.style.width = "100%";
  // el.style.height ="100%";
  // el.style.maxHeight = "500px";
}
console.log("loaded show2");

function show3(){
  cleanupContent();
  parentContainer.appendChild(imageContent);
  imageContent.innerHTML ='<img class="viz" src="viz/Story2Data2.png" alt="">';
  // document.getElementById("htmlcontent").style.visibility = "hidden";
  // var el = document.getElementById("content");
  // el.style.visibilty = "visible";
  // var image2 = el.innerHTML = '<img src="viz/Story2Data2.png" alt="" style="mix-blend-mode: multiply;">';
  // el.style.width = "100%";
  // el.style.height ="100%";
  // el.style.maxHeight = "500px";
}

console.log("loaded show3");

function showText1(){
    cleanupContent();
    parentContainer.appendChild(htmlContent);
    htmlContent.src = 'stories/Story1.html';

console.log(" loaded showText1");

  // document.getElementById("content").style.visibility = "hidden";
  // var el = document.getElementById("htmlcontent");
  // el.style.width = '80vw';
  // el.style.alignItems = 'center';
  // el.style.visibility = "visible";
  // el.src = 'stories2/Story1.html';
//   el.style.height = el.contentWindow.document.body.scrollHeight + 'px';
// }

function showText2(){

    cleanupContent();
    parentContainer.appendChild(htmlContent);
    htmlContent.src = 'stories/Story2.html';

console.log("loaded showText2");
  // document.getElementById("content").style.visibility = "hidden";
  // var el = document.getElementById("htmlcontent");
  // el.style.width = '80vw';
  // el.style.visibility = "visible";
  // el.src = 'stories2/Story2.html';
  // el.style.height = el.contentWindow.document.body.scrollHeight + 'px';
}

function resizeIframe() {
  // var el = document.getElementById('htmlcontent');
  // if (el) {
    var cont = htmlContent.contentWindow.document.body || frame.contentDocument.body
    htmlContent.style.height = cont.scrollHeight + 10 + "px";
  }

console.log("adding click listener for image show");
button1Div.addEventListener("click", show1);
button2Div.addEventListener("click", show2);
button3Div.addEventListener("click", show3);
console.log("adding load listener");
htmlContent.addEventListener("load", resizeIframe);
// document.getElementById("htmlcontent").

console.log("adding click listener for html show")
link1.addEventListener("click", showText1);
// contentDiv.innerHTML = "UK Cycling Incidents Occur 80 Percent of The Time in Urban Areas";
link2.addEventListener("click", showText2);
