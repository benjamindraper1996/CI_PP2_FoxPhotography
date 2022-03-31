/**
 * sendEmail to send email using contact.js, 
 * The API that is used is described here: https://www.emailjs.com/
 * @param contactForm [The contact form object]
 */
function sendMail(contactForm) {
    emailjs.init("user_2FuQau4zwU9NqnwDl");
    emailjs.send("service_ega18y2", "template_m5hw7tk", {
        "from_name": contactForm.full_name.value,
        "from_email": contactForm.email_address.value,
        "message":  contactForm.message-box.value
    }).then(
        function (response) {
            console.log("Sending Email", response);
        },
        function (error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}