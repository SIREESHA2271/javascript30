const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

imgs.forEach(img => img.addEventListener('click', changeImg) );

function changeImg(e) {
    //reset opacity
    imgs.forEach(img => img.style.opacity = 1);

    //change img when clicked
    current.src = e.target.src;

    //add fade class
    current.classList.add('fade');

    //remove fade class after 0.5s
   setTimeout(()=> current.classList.remove('fade'),500);

    //set opacity when clicked
    e.target.style.opacity = opacity;
    
    
}