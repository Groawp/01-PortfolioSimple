const portfolioItems = document.querySelectorAll('.portfolio');

portfolioItems.forEach(port => {
    port.addEventListener('mouseover', () => {
        port.childNodes[3].classList.add('img-darken');

        
    })

    port.addEventListener('mouseout', () => {
        port.childNodes[3].classList.remove('img-darken');

        
    })
})