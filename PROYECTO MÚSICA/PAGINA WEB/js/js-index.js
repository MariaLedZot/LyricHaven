document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".index-contenedor");
    container.style.opacity = "0";
    container.style.transform = "translateY(30px)";
    
    setTimeout(() => {
        container.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
    }, 500);

    const button = document.querySelector(".index-btn");
    button.addEventListener("mouseover", () => {
        button.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.7)";
    });
    button.addEventListener("mouseout", () => {
        button.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    });
});