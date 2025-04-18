const logosContainer = document.querySelector(".logos");
const originalLogosNum = logosContainer.children.length;
let containerWidth = 0;

document.addEventListener("DOMContentLoaded", () => {
    cloneLogos(logosContainer);

    // scroll animation
    let scrollPosition = 0;
    function scroll() {
        scrollPosition -= 0.5; // adjust for scroll speed (lower=slower)

        // reset position when first set of images are out of view
        if (Math.abs(scrollPosition) >= containerWidth) scrollPosition = 0;

        logosContainer.style.transform = `translateX(${Math.ceil(scrollPosition)}px)`;  // use ceil to avoid subpixel rendering issues
        requestAnimationFrame(scroll);
    }
    scroll();
});

window.addEventListener("resize", () => {
    cloneLogos(logosContainer); // reclone on resize to adjust for new window size
});

// clones images to create seamless scroll, assumes consistent image width
const cloneLogos = container => {
    let images = Array.from(container.children);
    const imgWidth = images[0].getBoundingClientRect().width;
    containerWidth = imgWidth * originalLogosNum;
    
    // determine number of clones needed
    const cloneNum = Math.ceil(window.innerWidth / containerWidth);
    if (cloneNum * originalLogosNum + originalLogosNum === images.length) return; // don't need to clone if already cloned

    // reset images to original count
    images = images.slice(0, originalLogosNum);
    while (container.children.length > originalLogosNum) {
        container.removeChild(container.lastChild);
    }
    
    // append new images
    for (let i = 0; i < cloneNum; i++) {
        images.forEach(logo => {
            const clone = logo.cloneNode(true);
            container.appendChild(clone);
        });
    }
}