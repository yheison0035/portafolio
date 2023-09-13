const options = document.querySelectorAll(".options-view");
const descriptions = document.querySelectorAll(".content-description, .content-projects, .content-skills, .content-contact");

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        descriptions.forEach((d) => d.classList.remove("active"));

        descriptions[index].classList.add("active");

        descriptions.forEach((d, i) => {
            if (i === index) {
                d.style.height = "100vh";
            } else {
                d.style.height = "0";
            }
        });

        options.forEach((o) => o.classList.remove("active"));
        option.classList.add("active");
    });
});