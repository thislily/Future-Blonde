//create html to display when an error occurs
export function displayError(message = "Unknown error") {
    return `      <div class="error-message">
    <h1>Oops! Something has gone wrong!</h1>
    <div>
      <img src="../../images/uh-oh.svg" alt="a cute shocked mutant" />
      <p>${message}</p>
    </div>
  </div>`;
}
