const logo = document.getElementById('logo');
let intervalId; // Store the interval ID to clear it later
let flag = false;

logo.addEventListener('mouseenter', () => {
   const container = document.querySelector('.container');
   flag = true;
   intervalId = setInterval(() => {
     container.style.background = backgroundColorChange();
   }, 1000); // Change color every second (you can adjust the interval)
});

logo.addEventListener('mouseleave', () => {
    const container = document.querySelector('.container');
    flag = false;
    clearInterval(intervalId); // Clear the interval when the mouse leaves
    container.style.background = '';
});

const backgroundColorChange = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgba(${r}, ${g}, ${b}, .1)`;
}
function showContactForm() {
    document.getElementById("cta").style.display = "none";
    document.getElementById("contact-form").style.display = "block";
}

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Replace 'your-email@example.com' with your actual email address
    const toEmail = 'trevorjacobsykes@gmail.com';

    const senderName = document.getElementById("sender-name").value;
    const senderEmail = document.getElementById("sender-email").value;
    const message = document.getElementById("message").value;

    // Alert users that the following action is for demonstration purposes only
    alert(`Sending message:
    Name: ${senderName}
    Email: ${senderEmail}
    Message: ${message}
    
    Note: This functionality is currently in demonstration mode. To send an actual message, please use the designated mail icon. Thank you!`);

    document.getElementById("contact-form").style.display = "none";
    document.getElementById("confirmation-message").style.display = "block";
}

function returnToHome() {
    window.location.href = "index.html"; // Change this URL to your home page
}

document.getElementById("contact-form").addEventListener("submit", sendEmail);
