const menuBar = document.getElementById("menuBar").children;
function mouseOver(){
    this.style.backgroundColor = "rgba(146, 143, 148, 0.3)";
    this.style.cursor = "pointer";
    this.style.color = "blueviolet";
}
function mouseOut(){
    this.style.background = "none";
    this.style.color = "aliceblue";
}
for (let i = 0; i < menuBar.length; i++) {
  menuBar[i].addEventListener("mouseover", mouseOver);
  menuBar[i].addEventListener("mouseout", mouseOut);
}
const dropDown = document.getElementById("dropDown-content").children;
for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("mouseover",mouseOver);
  dropDown[i].addEventListener("mouseout", mouseOut);
}

const slides = document.getElementsByClassName('slide');
let index = 0;
slideShow(index);
function nextSlide(){
    index+=1;
    if(index>=slides.length){
        index=0;
    }
    slideShow(index);
}

function prevSlide(){
    index-=1;
    if(index<0){
        index= slides.length-1;
    }
    slideShow(index);
}

function slideShow(index){

    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}
setInterval(nextSlide, 1500)










