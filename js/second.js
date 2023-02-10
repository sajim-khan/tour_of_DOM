console.log('Added second file')

// Where we added
const firstList = document.getElementById('first-list');
///what we added
const li = document.createElement('li');
li.innerText = 'My dynamic list';

firstList.appendChild(li);
