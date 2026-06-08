document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       GALLERY SLIDESHOW
    ============================== */

    const galleryImage = document.getElementById("gallery-image");
    const galleryTitle = document.getElementById("gallery-title");

    if (galleryImage && galleryTitle) {

        const images = [
            { title: "Emotion in Motion", src: "images/emotioninmotion.jpg" },
            { title: "Dream Scape", src: "images/dreamscape.jpg" },
            { title: "Duality of Man", src: "images/dualityofman.jpg" },
            { title: "Lady of Elegance", src: "images/ladyofelegance.jpg" },
            { title: "Lona Misa", src: "images/lonamisa.jpg" },
            { title: "Persistence of Time", src: "images/persistenceoftime.jpg" },
            { title: "Reality Unfolded", src: "images/realityunfolded.jpg" },
            { title: "Starry Nightmare", src: "images/starrynightmare.jpg" },
            { title: "The Human Condition", src: "images/thehumancondition.jpg" },
            { title: "The Noble Gentleman", src: "images/thenoblegentleman.jpg" }
        ];

        let currentIndex = 0;

        function updateGallery() {
            const { title, src } = images[currentIndex];

            // Fade out first
            galleryImage.style.opacity = 0;
            galleryTitle.style.opacity = 0;

            setTimeout(() => {
                galleryImage.src = src;
                galleryImage.alt = title;
                galleryTitle.textContent = title;

                // Fade in
                galleryImage.style.opacity = 1;
                galleryTitle.style.opacity = 1;

                currentIndex = (currentIndex + 1) % images.length;
            }, 800);
        }

        galleryImage.style.transition = "opacity 1s ease-in-out";
        galleryTitle.style.transition = "opacity 1s ease-in-out";

        updateGallery();
        setInterval(updateGallery, 5000);
    }

    /* ==============================
       CONTACT FORM
    ============================== */

    const contactForm = document.getElementById("contact-form");
    const formSuccess = document.getElementById("form-success");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if (formSuccess) {
                formSuccess.textContent = "Thank you for your message! We'll be in touch soon.";
                formSuccess.style.display = "block";
            } else {
                alert("Thank you for your message! We'll be in touch soon.");
            }

            contactForm.reset();
        });
    }

    /* ==============================
       MUSIC CONTROLS
    ============================== */

    const muteButton = document.getElementById("mute-button");
    const audioFrame = document.getElementById("audio-frame");

    if (muteButton && audioFrame) {

        let isMuted = localStorage.getItem("audioMuted") === "true";
        muteButton.textContent = isMuted ? "Unmute" : "Mute";

        muteButton.addEventListener("click", () => {
            isMuted = !isMuted;
            muteButton.textContent = isMuted ? "Unmute" : "Mute";

            audioFrame.contentWindow.postMessage(
                isMuted ? "mute" : "unmute",
                "*"
            );

            localStorage.setItem("audioMuted", isMuted);
        });
    }

    /* ==============================
       PAGE TRANSITIONS
    ============================== */

    document.body.classList.add("fade-in");

    const links = document.querySelectorAll("a[href]");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {

            const href = link.getAttribute("href");

            if (href.startsWith("http") || href.startsWith("#")) return;

            event.preventDefault();

            document.body.classList.remove("fade-in");
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            }, 800);
        });
    });

});