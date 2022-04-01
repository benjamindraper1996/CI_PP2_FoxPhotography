/**
 * sendEmail to send email using contact.js, 
 * The API that is used is described here: https://www.emailjs.com/
 * @param contactForm [The contact form object]
 */
function sendMail(contactForm) {
    emailjs.init("user_2FuQau4zwU9NqnwDl");
    emailjs.sendform('service_ghnjauc', 'FoxPhotography', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.messageBox.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response),
            alert ("Your message has been sent.");
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}