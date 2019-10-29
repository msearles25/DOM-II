// Your code goes here

// mouse over to scale bigger middle images
const imgScale = document.querySelectorAll('.img-content');
imgScale.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.style.transform = 'scale(1.2)';
        e.style.transition = '0.3s'
    })
    e.addEventListener('mouseleave', () => {
        e.style.transform = 'scale(1)';
        e.style.transition = '0.3s'
    })
});

// keydown event

const keyDown = document.querySelector('.intro p');
window.addEventListener('keydown', () => {
    keyDown.style.background = 'pink';
});

// wheel

const wheelEvent = document.querySelector('footer p');
wheelEvent.addEventListener('wheel', () => {
    wheelEvent.style.fontSize = '30px';
    wheelEvent.style.color = '#17A2B8';
});

// drag drop

// load
window.addEventListener('load', () => {
    alert('Loaded!');
});

// focus

const focus = document.querySelector('.content-destination');
window.addEventListener('focus', () => {
    focus.style.background = '#FFEBCD';
});

// resize

const resizeEvent = document.querySelector('.text-content p');
window.addEventListener('resize', () => {
    resizeEvent.style.fontWeight = 'bold';
    resizeEvent.style.fontSize = '20px';
});

// scroll event

const scrollEvent = document.querySelector('body');
window.addEventListener('scroll', () => {
    scrollEvent.style.backgroundColor = '#fc0';
});

// select 

const inputBox = document.createElement('input');
const paragraph1 = document.createElement('p');
const heading = document.querySelector('.logo-heading');

inputBox.id = 'inputBoxSelect';
inputBox.value = 'Hello World';
paragraph1.id = 'paraSelect';

heading.append(inputBox);
heading.append(paragraph1);

const selectEvent = document.querySelector('#inputBoxSelect');
selectEvent.addEventListener('select', () => {
    document.getElementById('paraSelect').innerHTML = 'You selected some text!';
});
// double click and stop propagation
const doubleClick1 = document.querySelectorAll('.destination h4');
doubleClick1.forEach(e => {
    e.addEventListener('dblclick', (event) => {
        e.style.color = '#17A2B8';
        event.stopPropagation();
    })
});

// second double click
const doubleClick2 = document.querySelector('.content-pick');
doubleClick2.addEventListener('dblclick', () => {
    doubleClick2.style.backgroundColor = 'white';
});

// prevent default

const stopLinks = document.querySelector('.nav-link');

stopLinks.addEventListener('click', (e) => {
    e.preventDefault();
});