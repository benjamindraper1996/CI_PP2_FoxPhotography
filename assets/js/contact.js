/**
 * sendEmail to send email using contact.js, 
 * The API that is used is described here: https://www.emailjs.com/
 * @param contactForm [The contact form object]
 */
function sendMail(contactForm) {
    var tempParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("messageBox").value,
    };
    //Sends the email using the specific service ID, Email template and parameters above.
    emailjs.send('service_ghnjauc', 'template_m5hw7tk', tempParams)
    .then(function(response){
        console.log("Email Sent", response.status);
    })
}