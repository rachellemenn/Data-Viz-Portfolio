//Find story and graph pane and the button
var button1Div= document.getElementById("button1");
var button2Div= document.getElementById("button2");
var button3Div= document.getElementById("button3");

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

function show1() {
    cleanupContent();
    parentContainer.appendChild(imageContent);
    imageContent.innerHTML ='<img class="viz" src="viz/Story1Data1.jpg" alt="">';
}

console.log("loaded show1");

function show2(){
  cleanupContent();
  parentContainer.appendChild(imageContent);
  imageContent.innerHTML ='<img class="viz" src="viz/Story2Data1.jpg" alt="">';
}

console.log("loaded show2");

function show3(){
  cleanupContent();
  parentContainer.appendChild(imageContent);
  imageContent.innerHTML ='<img class="viz" src="viz/Story2Data2.png" alt="">';
}

console.log("loaded show3");

function showText1() {
    cleanupContent();
    parentContainer.appendChild(htmlContent);
    htmlContent.src = 'stories/Story1.html';
}

console.log("loaded showText1");


function showText2(){
    cleanupContent();
    parentContainer.appendChild(htmlContent);
    htmlContent.src = 'stories/Story2.html';
}

console.log("loaded showText2");

function resizeIframe() {
    var cont = htmlContent.contentWindow.document.body || frame.contentDocument.body;
    htmlContent.style.height = cont.scrollHeight + 10 + "px";
  }

console.log("adding click listener for image show");
button1Div.addEventListener("click", show1);
button2Div.addEventListener("click", show2);
button3Div.addEventListener("click", show3);
console.log("adding load listener");
htmlContent.addEventListener("load", resizeIframe);

console.log("adding click listener for html show");
link1.addEventListener("click", showText1);
link2.addEventListener("click", showText2);
