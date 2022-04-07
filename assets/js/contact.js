/**
 * Sends email using contact.js API. 
 * The API that is used is described here: https://www.emailjs.com/
 */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('emailform').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.init("2FuQau4zwU9NqnwDl");
        emailjs.sendForm('service_ghnjauc', 'template_m5hw7tk', this)
            .then(function () {
                // Email sent
            }, function (error) {
                // Error message
                console.log('Failed to send email...', error);
            });
        message();
    });
});

/**
 * thanks the user for sending an email.
 */
function message() {
    alert("Thank you for sending us a message!");
}