document.addEventListener("DOMContentLoaded", function() {
    function imageError() {
        alert("An image failed to load. Please check your internet connection or image path.");
    }
    window.imageError = imageError;

    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
