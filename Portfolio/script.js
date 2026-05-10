document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav-menu");

    console.log(hamburger, menu); // DEBUG

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        console.log("clicked");
    });
});     


document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".contact-form-card");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Please complete the form first.");
            return;
        }

        console.log({
            name,
            email,
            message
        });

        alert("Your message has been received!");

        form.reset();
    });

});