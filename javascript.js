var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");
const checkNext = document.querySelector("#check-bill");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");



const changeAvailable = [2000,500,100,20,10,5,1]; //Available Denomination

checkButton.addEventListener("click", validateBillAndCashAmount);
checkNext.addEventListener("click", validateBillAndCashAmount);

function showElement() {
    document.getElementById("label").hidden = false;
    document.getElementById("cash-amount").hidden = false;
    document.getElementById("check-button").hidden = false;
    document.getElementById("check-bill").hidden = true;
}

function validateBillAndCashAmount() {
    billAmount = parseInt(billAmount.value); //to convert bill amount from string to int
    cashAmount = parseInt(cashAmount.value); //to convert cash amount from string to int
    
    errorMessage.style.display = "none";

    if(billAmount > 0) {
        showElement();
        if(cashAmount >= billAmount) {
            errorMessage.style.display = "none"; //hides error message
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
