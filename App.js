const billAmount = document.querySelector("#amount");
const givenAmount = document.querySelector("#given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");
const AllNotes = [2000, 1000, 500, 100, 50, 20, 10, 5, 1];
checkButton.addEventListener("click", function validateBillAndGivenAmount() {
  hideMessage();
  
  if (billAmount.value > 0) {

    if(givenAmount.value >= billAmount.value) {
      const returnedAmount = givenAmount.value - billAmount.value
      totalReturnedAmount(returnedAmount);

    } else if (typeof givenAmount.value == 'string') {
      displayMessage(
        "Bill amount must be a number!"
      );
    } else {
      displayMessage(
        "You wanna washes the plates?"
      );
    }
  
  }  else if (typeof billAmount.value == 'string') {
    displayMessage(
      "Bill amount must be a number!"
    );
  }  else {
    displayMessage(
      "Invalid bill amount!"
    );
  }
});

function totalReturnedAmount(returnedAmount) {
  for(let i=0; i<AllNotes.length; i++) {
    const noOfNotes = Math.trunc(returnedAmount/ AllNotes[i]);
    returnedAmount = returnedAmount % AllNotes[i];
    notes[i].innerText = noOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function displayMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}