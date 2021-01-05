
// selectors
const slider = document.getElementById('slider');
const container = document.querySelector('.container');

// event listeners
container.addEventListener('click', imgSlide);

// create img elements
const photo1 = document.createElement('img');
const photo2 = document.createElement('img');
const photo3 = document.createElement('img');
const photo4 = document.createElement('img');

// create btn elements
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

// set text to btns
prevBtn.textContent= "<";
nextBtn.textContent = ">";

// add class to btns
prevBtn.className = "prev";
nextBtn.className = "next";

//set the src attr for each img
photo1.src = "./photos/p1.jpg";
photo2.src = "./photos/p2.jpg";
photo3.src = "./photos/p3.jpg";
photo4.src = "./photos/p4.jpg";

// set class and ids to imgs
photo1.className = "indv-img";
photo1.id = "img1";
photo2.className = "indv-img";
photo2.id = "img2";
photo3.className = "indv-img";
photo3.id = "img3";
photo4.className = "indv-img";
photo4.id = "img4";

// create array containing each img
const photos = [photo1, photo2, photo3, photo4];

// append each photo to slider div 
slider.append(...photos);

// append btns to container div
container.prepend(prevBtn);
container.append(nextBtn);

// default img to display
photo1.style.display = "block";

// set a counter
let counter= 0;



// functions to callback

// clear display styles to photos
let clear = ()=> {
    for(let i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    };
}

// get the next photo
let next = ()=> {
    clear();
        counter++;
        photos[counter].style.display = "block";
        console.log('counter: ' + counter + " next func")
}

// get the prev photo
let prev = () => {
    clear();
    counter--;
    console.log(counter)
    
    //check to see if counter = -1
    if(counter === -1) {
        counter = 3;
        photos[counter].style.display = "block";
    }
    photos[counter].style.display = "block";

}


//main function to run after click event
function imgSlide(e) {

    // clicking next btn
    if(e.target.classList.contains('next') && (counter < 3)) {  
        console.log('fired')
        next();     
    }
    else if(e.target.classList.contains('next') && (counter = 3)) {
        console.log('firedddddd')
        counter = -1;
        next();
    }

    //clicking prev btn
    if(e.target.classList.contains('prev') && (counter >= 0)) {
        prev();
    }
    
    if(e.target.classList.contains('prev') && (counter < 0)) {
        counter = 4;
        console.log("when click prev and counter is 0 counter is " + counter)
        prev();
    }
};



