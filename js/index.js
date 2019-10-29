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