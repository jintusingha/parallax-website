
document.addEventListener('DOMContentLoaded', () => {
    const parallaxBg = document.querySelector('.parallax-background');
    const parallaxFg = document.querySelector('.parallax-foreground');
    const parallaxText = document.querySelector('.parallax-text');
    const scrollTopBtn = document.getElementById('scrollTop');
    
    let lastScroll = Date.now();
    const scrollThreshold = 16; 

    function updateParallax() {
        const scrollY = window.scrollY;
        
        requestAnimationFrame(() => {
            parallaxBg.style.transform = `translateY(${scrollY * 0.7}px)`;
            parallaxFg.style.transform = `translateY(-${scrollY * 0.3}px)`;
            parallaxText.style.transform = `translateY(${scrollY * 0.5}px)`;
        });
    }

   
    window.addEventListener('scroll', () => {
        if (Date.now() - lastScroll >= scrollThreshold) {
            updateParallax();
            lastScroll = Date.now();
        }
        
       
        scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
    });

    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
    updateParallax();
});