const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');
const as = document.querySelector('.auto-scroll');
// const as = document.getElementById("scrolbtn");

let counter = 0 ;


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
as.addEventListener('click', scrollMe);


function nextSlide() {
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});

    if(counter === 6){
        counter = -1;
    }


    counter++;
    container.style.backgroundImage = `url(img/bc-${counter}.jpg)`

};

function prevSlide() {
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    
    if(counter === 0){
        counter = 7;
    }
    counter--;
    container.style.backgroundImage = `url(img/bc-${counter}.jpg)`

};


function pageLoad() {
    var startButton = document.getElementById("scrolbtn");

    startButton.onclick = alertMe;
}

function scrollMe() {
  setInterval(function(){
    nextSlide();
  },3500);
}

