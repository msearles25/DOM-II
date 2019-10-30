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

const bus = document.querySelector('.intro img');

bus.onmousedown = function(event) {
    
    // gets the picture ready to move by making it absolute and making the zindex 1000
    bus.style.position = 'absolute'; 
    bus.style.zindex = '1000';
    // moves it to the body
    document.body.append(bus);
    
    // makes the function to center it at the coords
    function moveAt(pageX, pageY) {
        bus.style.left = pageX - bus.offsetWidth / 2 + 'px';
        bus.style.top = pageY - bus.offsetWidth / 6 + 'px';
    }

     // centers it at the coords
     moveAt(event.pageX, event.pageY);

     function onMouseMove(event) {
         moveAt(event.pageX, event.pageY);
     }

    //  moving the bus on mouse movement
     document.addEventListener('mousemove', onMouseMove);

    //  droping the bus
     bus.onmouseup = function() {
         document.removeEventListener('mousemove', onMouseMove);
     }

     bus.ondragstart = function () {
         return false;
     }
}

// copy event

const copyEvent = document.querySelector('body');

copyEvent.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'QUIT STEALING');
    event.preventDefault();
});

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