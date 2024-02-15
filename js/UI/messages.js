//create html to display when an error occurs
export function displayError(message = "Unknown error") {
    return `      <div class="error-message">
    <h1>Oops! Something has gone wrong!</h1>
    <div>
      <img src="../../images/uh-oh.svg" alt="a sad computer" />
      <p>${message}</p>
    </div>
  </div>`;
}


export function displayHappyMessage(message = "Things are going well!") {
  return `      <div class="happy-message">
  <h1>Hurray!</h1>
  <div>
    <img src="../../images/hurray.svg" alt="a happy computer" />
    <p>${message}</p>
  </div>
</div>`;
}

