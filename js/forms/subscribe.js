import { displayError, displayHappyMessage } from "../UI/messages.js";


export function handleSubscribeForm(){

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#subscribe-form');
    const messageContainer = document.querySelector('.message-container-subscribe')
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Validation flags and messages
      let isValid = true;
      let errorMessage = '';
  
      // Validate Name
      const name = document.getElementById('subscribe-name').value;
      if (name.length <= 2) {
        isValid = false;
        errorMessage += 'Name should be more than 2 characters long. <br>';
      }
  
      // Validate Email
      const email = document.getElementById('subscribe-email').value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
      if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.<br>';
      }
  

      // Check if all validations passed
      if (!isValid) {
        messageContainer.innerHTML = displayError(errorMessage); // Show error messages
        
        return; // Stop the function here
      }
  
      // If all validations pass, proceed to submit the form data
      const formData = new FormData(form);
      formData.set("_wpcf7_unit_tag", "randomTagName");
  

      fetch(`https://www.rainy-lily-days.one/wp-json/contact-form-7/v1/contact-forms/293/feedback`, {
        method: 'POST',
        body: formData
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
  