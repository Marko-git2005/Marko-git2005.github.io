const toggleBtn = document.querySelector('.toogle_btn'); 
const toggleBtnicon = document.querySelector('.toogle_btn i'); 
const dropdown = document.querySelector('.dropdown');
const slides = document.querySelectorAll(".slides img"); 
let slideIndex = 0; 
let intervalId = null; 

document.addEventListener("DOMContentLoaded", initilizeSlider()); 


function initilizeSlider(){
    if(slides.length >0){
        slides[slideIndex].classList.add("displaySlide"); 
        intervalId = setInterval(nextSlide, 5000); 
    }
    

}
function showSlide(index){
    if (index >= slides.length){
        slideIndex = 0; 

    }
    else if(index<0){
        slideIndex = slides.length-1; 

    }
    
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide")

    });
    slides[slideIndex].classList.add("displaySlide")
    
}
function prevSlide(){
    clearInterval(intervalId); 
    slideIndex--; 
    showSlide(slideIndex); 
}
function nextSlide(){
    clearInterval(intervalId); 
    slideIndex++; 
    showSlide(slideIndex); 
    
}


toggleBtn.onclick = function(){
    dropdown.classList.toggle('open');

    const isOpen = dropdown.classList.contains('open');
    
    toggleBtnicon.classList = isOpen
    ? 'fa-solid fa-xmark'
    :'fa-solid fa-bars'


}