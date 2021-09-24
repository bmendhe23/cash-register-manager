const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");

errorMessage.style.display = "none";

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount() {
    if(billAmount.value > 0) {
        if(cashAmount.value >= billAmount.value) {
            errorMessage.style.display = "none"; //hides eroor message
            const amountToBeReturned =  cashAmount.value - billAmount.value;
        } else {
            showErrorMessage("The cash provided should be greater than or equal to the bill amount.");
        }
    } else {
        showErrorMessage("Invalid Bill Amount");
    }
}

function showErrorMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    errorMessage.innerText = message;
}
