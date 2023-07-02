const billAmount = document.querySelector("#amount");
const givenAmount = document.querySelector("#given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");
const AllNotes = [2000, 1000, 500, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", validateBillAndGivenAmount);

function validateBillAndGivenAmount() {
  hideMessage();

  const bill = Number(billAmount.value);
  const given = Number(givenAmount.value);

  if (isNaN(bill) || isNaN(given)) {
    displayMessage("Bill and given amounts must be numbers!");
    return;
  }

  if (given < bill) {
    displayMessage("Insufficient amount! Please give more money.");
    return;
  }

  const returnedAmount = given - bill;
  totalReturnedAmount(returnedAmount);
}

function totalReturnedAmount(returnedAmount) {
  for (let i = 0; i < AllNotes.length; i++) {
    const noOfNotes = Math.trunc(returnedAmount / AllNotes[i]);
    returnedAmount %= AllNotes[i];
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
