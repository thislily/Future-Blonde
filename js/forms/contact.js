//validate and send contact data to WP API 
import { displayError, displayHappyMessage } from "../UI/messages.js";


export function handleContactForm(){

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const messageContainer = document.querySelector('.message-container')
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      let isValid = true;
      let errorMessage = '';
  
      //check name
      const name = document.getElementById('your-name').value;
      if (name.length <= 5) {
        isValid = false;
        errorMessage += 'Name should be more than 5 characters long. <br>\n';
      }
  
      //check email
      const email = document.getElementById('your-email').value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.<br>\n';
      }
  
      //check subject
      const subject = document.getElementById('your-subject').value;
      if (subject.length <= 15) {
        isValid = false;
        errorMessage += 'Subject should be more than 15 characters long.<br>\n';
      }
  
      //check message
      const message = document.getElementById('your-message').value;
      if (message.length <= 25) {
        isValid = false;
        errorMessage += 'Message content should be more than 25 characters long.<br>\n';
      }
  
      //if theres any issues with validation
      if (!isValid) {
        messageContainer.innerHTML = displayError(errorMessage);
        
        return;
      }
  
      //if everything is valid, submit the form data
      const formData = new FormData(form);
      formData.set("_wpcf7_unit_tag", "randomTagName");
  
      fetch(`https://www.rainy-lily-days.one/wp-json/contact-form-7/v1/contact-forms/289/feedback`, {
        method: 'POST',
        body: formData
      })
      
      .then(response => response.json())
      .then(data => {
        if(data.status === 'mail_sent') {
          messageContainer.innerHTML = displayHappyMessage('Thank you for your message. It has been sent.');
          
          form.reset();
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
  