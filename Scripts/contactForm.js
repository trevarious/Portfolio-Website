
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

/*

// HTML for contact form
<form id="contact-form" style="display: none;">
<label for="sender-name">Name:</label>
<input type="text" id="sender-name" required>

<label for="sender-email">Email:</label>
<input type="email" id="sender-email" required>

<label for="message">Message:</label>
<textarea id="message" required></textarea>

<button type="submit">Send</button>
</form>

<div id="confirmation-message" style="display: none;">
<p>Message sent. Thank you!</p>
<button onclick="returnToHome()">Back to Home</button>
</div>

            <div class="btn-container">
                <button id="cta" onclick="showContactForm()"><span class="lets">let's</span><br><span class="talk">talk</span></button>
                </div>
*/

/*
// CSS for contact form
.btn-container{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgb(255, 0, 0);
    border: none;
    margin: 0 0 0 250px;

}

#cta{
    border: none;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    background: rgb(255, 159, 159);
    font-size: 1.3rem;
    color: rgb(249, 247, 247);
    cursor: pointer;
    margin: 0 0 0 0;
    z-index: 1000;

}



#image-main{
    height: auto;
    border-radius: 50%;
    animation: content-scale 300ms calc(var(--load-time));
    animation-fill-mode: forwards;
    scale: 0;
    opacity: 1
}

.image{
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 3%;
}


.content-flex{
    flex: 1;
    display: flex;

}

#contact-form {
    background: rgb(53, 53, 53);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 100%;
    position: absolute;
    color: white;
}

#contact-form label,
#contact-form button {
    color: white;
}

#contact-form input[type="text"],
#contact-form input[type="email"],
#contact-form textarea {
    background: rgb(0, 120, 120);
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
    width: 100%;
}

#contact-form button {
    background: rgb(255, 162, 139);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s ease;
}

#contact-form button:hover {
    background: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
}

#confirmation-message {
    background: rgb(53, 53, 53);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 100%;
    position: absolute;
    color: white;
}

#confirmation-message p {
    color: white;
}

#confirmation-message button {
    background: rgb(0, 255, 255);
    color: rgb(255, 73, 73);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s ease;
}

#confirmation-message button:hover {
    background: white;
    color: rgb(0, 255, 255);
}


*/


