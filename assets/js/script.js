// script.js

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
var voiceRecognition = new SpeechRecognition();

// Set language to English (United States)
voiceRecognition.lang = 'en-US';

// Disable interim results
voiceRecognition.interimResults = false;

// Set the maximum number of alternative transcripts to 5
voiceRecognition.maxAlternatives = 5;

// Function to send email
function sendEmail(message) {
    // Replace these values with your own
    var serviceID = 'service_6u673mf';
    var templateID = 'template_ky8dgya';
    var userID = 'ziBY1z8O2_KQRDMrX';

    // Prepare email parameters
    var templateParams = {
        to_email: 'johnlloydbalduman@gmail.com',
        message: message
    };

    // Send the email
    emailjs.send(serviceID, templateID, templateParams, userID)
        .then(function (response) {
            console.log('Email sent successfully', response);
        }, function (error) {
            console.error('Email sending failed', error);
        });
}

voiceRecognition.onresult = function (event) {
    var recordedVoice = event.results[0][0].transcript;

    // Send email with recorded voice message
    sendEmail(recordedVoice);
};

// Start voice recognition when the page loads
voiceRecognition.start();
