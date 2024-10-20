document.addEventListener("DOMContentLoaded", function () {
    const aboutBtn = document.getElementById("aboutBtn");
    const aboutModal = document.getElementById("aboutModal");
    const closeBtn = document.querySelector(".close");

    // Show the modal when the button is clicked
    aboutBtn.onclick = function () {
        aboutModal.style.display = "block"; // Show the modal
        aboutModal.style.opacity = 0; // Set initial opacity for fade-in effect
        let opacity = 0;

        // Fade in effect
        const fadeInInterval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.05; // Increase opacity
                aboutModal.style.opacity = opacity; // Apply opacity
            } else {
                clearInterval(fadeInInterval); // Stop the interval
            }
        }, 50); // Adjust timing for smoother animation
    };

    // Close the modal when the close button is clicked
    closeBtn.onclick = function () {
        aboutModal.style.display = "none"; // Hide the modal
    };

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target === aboutModal) {
            aboutModal.style.display = "none"; // Hide the modal
        }
    };
});
