const slideIcon = document.getElementById("slide-menu");
const slidebar = document.getElementById("sidebar");

slideIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    slideIcon.classList.toggle("active");
    slidebar.classList.toggle("active");
});
slidebar.addEventListener("click", (e) => {
    e.stopPropagation();
})

document.addEventListener("click", () => {
    if(slidebar.classList.contains("active")) {
        slidebar.classList.remove("active");
        slideIcon.classList.remove("active");
    }
});


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    })
}, { thereshold: 0.2 });
reveals.forEach(reveal => observer.observe(reveal));

const btn = document.querySelectorAll("button")
btn.forEach(button => {
    button.addEventListener("pointerdown", () => {
        button.classList.add("pressed");
    })

    button.addEventListener("pointerup", () => {
        button.classList.remove("pressed");
    })
    button.addEventListener("pointerleave", () => {
        button.classList.remove("pressed");
    })

    button.addEventListener("pointercancel", () => {
        button.classList.remove("pressed");
    })
})