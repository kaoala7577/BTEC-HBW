const logosContainer = document.querySelector(".logos");
let originalLogosNum;
let containerWidth = 0;
if (logosContainer) {
    originalLogosNum = logosContainer.children.length;

    document.addEventListener("DOMContentLoaded", () => {
        cloneLogos(logosContainer);
        scroll();
    });

    window.addEventListener("resize", () => {
        cloneLogos(logosContainer); // reclone on resize to adjust for new window size
    });
}

// logo scroll animation
let scrollPosition = 0;

function scroll() {
    scrollPosition -= 0.5; // adjust for scroll speed (lower=slower)

    // reset position when first set of images are out of view
    if (Math.abs(scrollPosition) >= containerWidth) scrollPosition = 0;

    logosContainer.style.transform = `translateX(${Math.ceil(scrollPosition)}px)`;  // use ceil to avoid subpixel rendering issues
    requestAnimationFrame(scroll);
}

// clones images to create seamless scroll, assumes consistent image width
const cloneLogos = container => {
    let images = Array.from(container.children);
    const imgWidth = images[0].getBoundingClientRect().width;
    const imgMargin = parseFloat(getComputedStyle(images[0]).marginRight) * 2; // margin on both sides
    const imgTotalWidth = imgWidth + imgMargin;
    containerWidth = imgTotalWidth * originalLogosNum;

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

// multi item carousel for team section
const carousel = document.getElementById('carouselTeamIndicators');
if (carousel) {
    carousel.addEventListener('slide.bs.carousel', event => {
        /*
            CC 2.0 License Iatek LLC 2018 - Attribution required
        */
        const carouselInner = carousel.querySelector('.carousel-inner');
        const items = Array.from(carousel.querySelectorAll('.carousel-item'));
        const relatedTarget = event.relatedTarget;
        const idx = items.indexOf(relatedTarget);
        const itemsPerSlide = 3;
        const totalItems = items.length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            const it = itemsPerSlide - (totalItems - idx);
            for (let i = 0; i < it; i++) {
                if (event.direction === "left") {
                    carouselInner.appendChild(items[i]);
                } else {
                    carouselInner.appendChild(items[0]);
                }
            }
        }
    });
}

const teamModal = document.getElementById('teamModal');
if (teamModal) {
    teamModal.addEventListener('show.bs.modal', async event => {
        const button = event.relatedTarget;
        const recipient = button.getAttribute('data-bs-whatever');
        const modalTitle = document.getElementById('teamModalTitle');
        const modalDescription = document.getElementById('teamModalDescription');
        const modalImage = document.getElementById('teamModalImage');

        let newTitle;
        let newDescription;
        let newImage;
        if (recipient === "daniel") {
            newTitle = "Daniel Lecroy";
            newDescription = "assets/text/Daniel.txt";
            newImage = "assets/images/Daniel_Lecroy.jpg";
        } else if (recipient === "li") {
            newTitle = "Li Chang";
            newDescription = "assets/text/Li Chang.txt";
            newImage = "assets/images/Li Chang.PNG";
        } else if (recipient === "rosa") {
            newTitle = "Rosa DeCastello";
            newDescription = "assets/text/Rosa_DeCastello.txt";
            newImage = "assets/images/Rosa_DeCastello.jpg";
        }
        newDescription = await fetch(newDescription)
            .then(text => text.text())
            .then(text => text.replace(/\n/g, "<br>"));
        modalTitle.textContent = newTitle + " - About me";
        modalDescription.innerHTML = newDescription;
        modalImage.src = newImage;
    });
}
