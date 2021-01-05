
const slider = document.getElementById('slider');
const container = document.querySelector('.container');

container.addEventListener('click', imgSlide);

const photo1 = document.createElement('img');
const photo2 = document.createElement('img');
const photo3 = document.createElement('img');
const photo4 = document.createElement('img');

const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

prevBtn.textContent= "<";
prevBtn.className = "prev";

nextBtn.textContent = ">";
nextBtn.className = "next";

photo1.src = "./photos/p1.jpg";
photo2.src = "./photos/p2.jpg";
photo3.src = "./photos/p3.jpg";
photo4.src = "./photos/p4.jpg";

photo1.className = "indv-img";
photo1.id = "img1";
photo2.className = "indv-img";
photo2.id = "img2";
photo3.className = "indv-img";
photo3.id = "img3";
photo4.className = "indv-img";
photo4.id = "img4";


const photos = [photo1, photo2, photo3, photo4];

slider.append(...photos);

container.prepend(prevBtn);
container.append(nextBtn);

function imgSlide(e) {
    if(e.target.classList.contains('prev')) {
        for(let i = 0; i < photos.length; i++) {
            photos[i].style.display = "none";
        };
        photo4.style.display = "block";
    } else if (e.target.classList.contains('next')) {
        for(let i = 0; i < photos.length; i++) {
            photos[i].style.display = "none";
        };
        photo1.style.display = "block";
    }
};



