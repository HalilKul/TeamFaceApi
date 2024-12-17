document.addEventListener('DOMContentLoaded', () => {
  
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            navMenu.classList.toggle('slide-down');
        });
    }


    const galleryImages = document.querySelectorAll('.galeri-container img');

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            const src = img.getAttribute('src');

            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <img src="${src}" alt="Resim">
                <a href="#" class="close">&times;</a>
                <a href="#" class="prev">&#10094;</a>
                <a href="#" class="next">&#10095;</a>
            `;

            document.body.appendChild(lightbox);

            let currentIndex = index;


            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('prev')) {
                    e.preventDefault();
                    currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
                    lightbox.querySelector('img').src = galleryImages[currentIndex].src;
                }

                if (e.target.classList.contains('next')) {
                    e.preventDefault();
                    currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
                    lightbox.querySelector('img').src = galleryImages[currentIndex].src;
                }

                if (e.target.classList.contains('close') || e.target.classList.contains('lightbox')) {
                    lightbox.remove();
                }
            });
        });
    });

   
    document.addEventListener('click', (e) => {
        if (e.target && e.target.matches('.close')) {
            document.querySelector('.lightbox').remove();
        }
    });

    // İletişim Formu Validasyonu
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mesajınız gönderildi.');
        });
    }
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Carousel
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const carouselInner = document.querySelector('.carousel-inner');
    let currentIndex = 0;

    if (prevButton && nextButton && carouselInner) {
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = carouselInner.children.length - 1;
            }
            updateCarousel();
        });

        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentIndex < carouselInner.children.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        });

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('nav ul li a');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

