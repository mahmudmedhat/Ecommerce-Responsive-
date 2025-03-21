var bars = document.getElementById("bars"),
    clos = document.getElementById("close");

var link = document.getElementById("link");

var links = document.querySelectorAll(".links");

bars.addEventListener("click", function () {
    link.style.right = "0";
});
clos.addEventListener("click", function () {
    link.style.right = "-100%";
});
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
    link.style.right = "-100%";
});
}

/*start product */
var imgList = document.getElementsByClassName("img-item");

var lightBox = document.getElementById("light-box"),
    light = document.getElementById("light"),
    next=document.getElementById("next"),
    prev=document.getElementById("prev"),
    closee=document.getElementById("clos");
    var currentSlide=0;

var imgContainer = [];
for (var i = 0; i < imgList.length; i++) {
    imgContainer.push(imgList[i]);
    imgContainer[i].addEventListener("click", function (e) {
        currentSlide= imgContainer.indexOf(e.target);
    var imgS = e.target.getAttribute("src");

    lightBox.style.display="flex";
    light.style.backgroundImage = "url(" + imgS + ")";
});
}

function nextS(){
    currentSlide++;
    if(currentSlide==imgContainer.length)
    {
        currentSlide=0;
    }
    light.style.backgroundImage = "url(" +imgContainer[currentSlide].getAttribute("src")+ ")";
}
function prevS(){
    currentSlide--;
    if(currentSlide < 0)
    {
        currentSlide=imgContainer.length-1;
    }
    light.style.backgroundImage = "url(" +imgContainer[currentSlide].getAttribute("src")+ ")";
}
function closS(){
    lightBox.style.display="none";
}

next.addEventListener("click", nextS);
prev.addEventListener("click",prevS);
closee.addEventListener("click",closS);




var inputForm=document.getElementById("forme");
var regex=/^([a-z]|[A-Z])$/;
inputForm.addEventListener("keyup",function(){


if(regex.test(inputForm.value)==false)
{
    inputForm.classList.remove("valid")
    inputForm.classList.add("invalid")
}
else{


    inputForm.classList.add("valid")
    inputForm.classList.remove("invalid")
}
})



$('.product').animate({width: '100%'}, 1500);