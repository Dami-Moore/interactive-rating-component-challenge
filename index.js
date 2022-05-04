
const rates = document.getElementsByClassName('rate');   

document.addEventListener('click', (e) => {
    const key = e.target;
    for(const rate of rates) {
        if(key === rate && key.getAttribute('class') !== 'rate clicked') {
            rate.classList.toggle('clicked');
            localStorage.setItem('value', rate.innerHTML);
        } else {
            rate.classList.remove('clicked');
        }
    }  
})







