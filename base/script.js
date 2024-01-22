toggleBtn = document.querySelector('.toogle_btn'); 
toggleBtnicon = document.querySelector('.toogle_btn i'); 
dropdown = document.querySelector('.dropdown');


toggleBtn.onclick = function(){
    dropdown.classList.toggle('open');

    const isOpen = dropdown.classList.contains('open');
    
    toggleBtnicon.classList = isOpen
    ? 'fa-solid fa-xmark'
    :'fa-solid fa-bars'


}