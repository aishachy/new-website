const dropdownToggle = document.getElementById("dropdownToggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    dropdownToggle.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
      overlay.classList.toggle("hidden");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    });

    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 1; // Start with the third picture in the center

    function updateCarousel() {
        const totalItems = items.length;

        items.forEach((item, index) => {
            const diff = (index - currentIndex + totalItems) % totalItems;

            if (diff === 0) {
                // Center image
                item.style.transform = 'scale(1) translateX(0)';
                item.style.opacity = '1';
                item.style.zIndex = '20';
            } else if (diff === 1 || diff === -3) {
                // Right image
                item.style.transform = 'scale(0.7) translateX(150px)';
                item.style.opacity = '0.5';
                item.style.zIndex = '10';
            } else if (diff === -1 || diff === 3) {
                // Left image
                item.style.transform = 'scale(0.7) translateX(-500px)';
                item.style.opacity = '0.5';
                item.style.zIndex = '10';
            } else if (diff === 2 || diff === -2) {
                // Behind on the right
                item.style.transform = 'scale(0.5) translateX(600px)';
                item.style.opacity = '0.3';
                item.style.zIndex = '0';
            } else if (diff === -2 || diff === 2) {
                // Behind on the left
                item.style.transform = 'scale(0.5) translateX(-300px)';
                item.style.opacity = '0.3';
                item.style.zIndex = '10';
            } else if (diff === 4 || diff === -4) {
                item.style.transform = 'scale(0.5) translateX(600px)';
                item.style.opacity = '0.3';
                item.style.zIndex = '0';
            }
        });
    }


        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }

        // Initialize the carousel
        updateCarousel();