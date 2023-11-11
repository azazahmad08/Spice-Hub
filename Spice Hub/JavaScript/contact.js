document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // You can add validation and data handling here

        // Example: Log the form data to the console
        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
            console.log(key + ": " + value);
        }

        // You can send the form data to a server using AJAX if needed
        // Here we're just logging it for demonstration
    });
});
