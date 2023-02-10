const sections = document.querySelectorAll('section');
for ( const section of sections ) {
    //console.log( section);
    section.style.border = '2px solid'
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'black'
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
// also add class by js
placesContainer.classList.add('text-center');
// also remove class by js
placesContainer.classList.remove('large-text');