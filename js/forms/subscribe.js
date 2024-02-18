
// export function handleSubscribeForm() {
//   const form = document.querySelector("#subscribe-form");
//   const messageContainerSubscribe = document.querySelector(
//     ".message-container-subscribe"
//   );

//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Validation flags and messages
//     let isValid = true;
//     let errorMessage = "";

//     // Validate Name
//     const name = document.getElementById("your-name-subscribe").value;
//     if (name.length <= 2) {
//       isValid = false;
//       errorMessage += "Name should be more than 2 characters long. <br>";
//     }

//     // Validate Email
//     const email = document.getElementById("your-email-subscribe").value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
//     if (!emailRegex.test(email)) {
//       isValid = false;
//       errorMessage += "Please enter a valid email address.<br>";
//     }

//     // Check if all validations passed
//     if (!isValid) {
//       messageContainerSubscribe.innerHTML = displayError(errorMessage); // Show error messages

//       return; // Stop the function here
//     }

//     // If all validations pass, proceed to submit the form data
//     const formData = new FormData(form);
//     formData.set("_wpcf7_unit_tag", "randomTagName");
//     formData.set("your-subject", "subscribe");

//     fetch(
//       `https://www.rainy-lily-days.one/wp-json/contact-form-7/v1/contact-forms/293/feedback`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.status === "mail_sent") {
//           messageContainerSubscribe.innerHTML = displayHappyMessage(
//             "Thank you for your message. It has been sent."
//           );
         

//           form.reset();
          
//         } else {
//           messageContainerSubscribe.innerHTML = displayError(
//             "There was a problem with your submission. Please try again."
//           );
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         messageContainerSubscribe.innerHTML = displayError(
//           "An error occurred while submitting the form. Please try again."
//         );
//       });
//   });
// }
