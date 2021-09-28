const current = document.querySelector('#current');
const mainImage = document.querySelector('.main-img');
const imgs = document.querySelectorAll('.imgs img');

const opacity = 1;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // Change current image to src of clicked image
    current.src = e.target.src;
    current.classList.add('active');

    // Change the opacity to opacity var
    mainImage.style.opacity = opacity;
}

// document.onclick = function(e) {
//     if(e.target.classList !== 'main-img' && current.classList.contains('active')) {
//         mainImage.style.opacity = 0;
//         current.classList.remove('active');
//     }
// }
