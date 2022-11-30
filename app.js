var confirmBtn = document.getElementById("confirm-btn");
var inputName = document.getElementById("name");
var inputNumber = document.getElementById("number");
var inputCvc = document.getElementById("cvc");
var inputMonth = document.getElementById("month");
var inputYear = document.getElementById("year")

var cardName = document.getElementById("card-name");
var cardNumber = document.querySelector(".card-number")
var cardCvc = document.getElementById("back-cvc");
var cardMonth = document.getElementById("mm");
var cardYear = document.getElementById("yy");

var cardForm = document.querySelector(".form");
var completeForm = document.querySelector(".complete");

confirmBtn.addEventListener("click", function(){
    cardForm.classList.toggle("form-hide");
    completeForm.classList.toggle("complete-show");
    console.log(inputName.value + ", " + inputNumber.value + ", " + inputMonth.value + ", " + inputYear.value + ", " + inputCvc.value);
    cardName.textContent = inputName.value;
    cardNumber.innerHTML = `<p class="card-number"><span>${inputNumber.value.slice(0, 4)}</span> <span>${inputNumber.value.slice(4, 8)}</span> <span>${inputNumber.value.slice(8, 12)}</span> <span>${inputNumber.value.slice(12, 17)}</span></p>`;
    cardMonth.textContent = inputMonth.value;
    cardYear.textContent = inputYear.value;
    cardCvc.textContent = inputCvc.value;
});