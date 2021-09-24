var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

errorMessage.style.display = "none";

const changeAvailable = [2000,500,100,20,10,5,1]; //Available Denomination

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount() {
    billAmount = parseInt(billAmount.value); //to convert bill amount from string to int
    cashAmount = parseInt(cashAmount.value); //to convert cash amount from string to int

    if(billAmount > 0) {
        if(cashAmount >= billAmount) {
            errorMessage.style.display = "none"; //hides eroor message
            const amountToBeReturned =  cashAmount - billAmount;
            calculateChange(amountToBeReturned); //calling calculate change function
        } else {
            showErrorMessage("The cash provided should be greater than or equal to the bill amount.");
        }
    } else {
        showErrorMessage("Enter a valid Bill Amount");
    }
}

function showErrorMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    errorMessage.innerText = message;
}

function calculateChange (amount) {
    var changeCount = [];
    var i = 0;

    while (i<changeAvailable.length) {
        var change = Math.floor(amount/changeAvailable[i]);
        if( change===0 ) {
            noOfNotes[i].innerText = 0;
        }else {
            amount = amount%changeAvailable[i];
            noOfNotes[i].innerText = change;
        }
        i++;
    }
}
