document.addEventListener("DOMContentLoaded", () => {
    const logosContainer = document.querySelector(".logos");
    const logos = Array.from(logosContainer.children);
    
    const logoWidth = logos[0].getBoundingClientRect().width;
    const containerWidth = logoWidth * logos.length;
    
    // determine number of clones needed for seamless scroll
    const clones = Math.ceil(window.innerWidth / containerWidth);

    // clone logos and add to container
    for (let i = 0; i < clones; i++) {
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            logosContainer.appendChild(clone);
        });
    }

    let scrollPosition = 0;
    function scroll() {
        scrollPosition -= 1; // adjust for scroll speed

        // reset position when first set of images are out of view
        if (Math.abs(scrollPosition) >= containerWidth) scrollPosition = 0;

        logosContainer.style.transform = `translateX(${scrollPosition}px)`;
        requestAnimationFrame(scroll);    
    }

    scroll();
});