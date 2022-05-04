const span = document.querySelector('span');

window.addEventListener('load', () => {
    span.innerHTML = localStorage.getItem('value');
})
