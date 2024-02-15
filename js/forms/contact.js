import { displayError, displayHappyMessage } from "../UI/messages.js";


export function handleContactForm(){

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const messageContainer = document.querySelector('.message-container')
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Validation flags and messages
      let isValid = true;
      let errorMessage = '';
  
      // Validate Name
      const name = document.getElementById('your-name').value;
      if (name.length <= 5) {
        isValid = false;
        errorMessage += 'Name should be more than 5 characters long. <br>\n';
      }
  
      // Validate Email
      const email = document.getElementById('your-email').value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
      if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.<br>\n';
      }
  
      // Validate Subject
      const subject = document.getElementById('subject').value;
      if (subject.length <= 15) {
        isValid = false;
        errorMessage += 'Subject should be more than 15 characters long.<br>\n';
      }
  
      // Validate Message
      const message = document.getElementById('message').value;
      if (message.length <= 25) {
        isValid = false;
        errorMessage += 'Message content should be more than 25 characters long.<br>\n';
      }
  
      // Check if all validations passed
      if (!isValid) {
        messageContainer.innerHTML = displayError(errorMessage); // Show error messages
        
        return; // Stop the function here
      }
  
      // If all validations pass, proceed to submit the form data
      const formData = new FormData(form);
  
      fetch(`https://www.rainy-lily-days.one/wp-json/contact-form-7/v1/contact-forms/bfd19a6/feedback`, {
        method: 'POST',
        body: formData, // FormData object automatically sets the Content-Type to multipart/form-data
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === 'mail_sent') {
          messageContainer.innerHTML = displayHappyMessage('Thank you for your message. It has been sent.');
          // Clear the form or handle UI changes as needed
          form.reset(); // Optional: Reset the form fields
        } else {
            messageContainer.innerHTML = displayError('There was a problem with your submission. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        messageContainer.innerHTML = displayError('An error occurred while submitting the form. Please try again.');
      });
    });
  });
}
  