/**
 * sendEmail to send email using contact.js, 
 * The API that is used is described here: https://www.emailjs.com/
 * @param contactForm [The contact form object]
 */
 function sendEmail(contactForm) {
    emailjs.init("user_2FuQau4zwU9NqnwDl");
    emailjs.send("Outlook", "Fox Photography", {
        "from-name": contactForm.name.value,
        "from-email": contactForm.email.value,
        "from-message": contactForm.message-box.value
    }).then(
        function (response) {
            // Email sent successfully.
        },
        function (error) {
            console.log("FAILED", error);
        }
    );
    return false;  // Stop the page from reloading.
}
