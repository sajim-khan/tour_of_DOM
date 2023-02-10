// where to be add
const placesList = document.getElementById('places-list');
//what to be added
const li = document.createElement('li');
li.innerText = 'Bagherhat'
//add the child
placesList.appendChild(li)

// 1. Where to add
const mainContainer = document.getElementById('main-container');

// What to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriany'
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'Kacchi'
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'Beef'
ul.appendChild(li3)

section.appendChild(ul);
mainContainer.appendChild(section);


//Another way to create a section dynamically
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My dress section</h1>
    <ul>
        <li> T-Shirt </li>
        <li> Shirt </li>
        <li> Pant </li>
        <li> Panjabi </li>
    </ul>
`
mainContainer.appendChild(sectionDress);