

// JS code for error icon starts here
const inputFields = document.querySelectorAll('.form-control');
const errorIcons = document.querySelectorAll('.error-icon');

inputFields.forEach((inputField, index) => {
  inputField.addEventListener('input', function () {
    const inputValue = inputField.value;
    if (inputValue.trim() !== '' && !/^\d+$/.test(inputValue)) {
      errorIcons[index].style.display = 'inline'; // Display error icon if input is not a number
      errorIcons[index].style.color = 'red';
    } else {
      errorIcons[index].style.display = 'none'; // Hide error icon if input is a number

    }
  });
});
//JS code for error icon ends here



// JS code for pop up starts here here 
document.getElementById('submitButton').addEventListener('click', function () {
  // Check if all required fields are filled
  if (document.getElementById('form').checkValidity()) {
    // If all required fields are filled, show the modal
    $('#exampleModalCenter').modal('show');
  }
  else {
    // If any required field is empty, prevent the modal from showing
    console.log('Please fill out all required fields.');
  }
});
//  JS code for pop up ends here here 

// JS code for tax deduction logic starts here
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let annualIncome = parseInt(document.getElementById('a_inc').value.replace(/\D/g, ''));

  let extraIncome = parseInt(document.getElementById('e_inc').value.replace(/\D/g, ''));

  let allDeduction = parseInt(document.getElementById('all_d').value.replace(/\D/g, ''));

  let age = parseInt(document.getElementById('age').value);

  if (isNaN(annualIncome)) {
    console.log("enter annual income");

    alert("Please enter numbers in annual income field");
    window.location.reload(true);
    
  }
  else if (isNaN(extraIncome)) {
    console.log("enter extra income");

   
    alert("Please enter numbers in extra income field");
    window.location.reload(true);
  }
  else if (isNaN(allDeduction)) {
    
    alert("Please enter numbers in all deduction  field");
    window.location.reload(true);
  }
  else {
    console.log(`${annualIncome} , ${extraIncome} , ${allDeduction}` );
    let actualAmount = 0;
    let overallIncome = (annualIncome + extraIncome) - allDeduction;
    console.log(overallIncome);
    if (overallIncome < 800000) {
      actualAmount = overallIncome;
      console.log(`Your overall income is ${actualAmount} after tax deduction`);
    }
    else {
      let taxAmount = 0, taxbale_amount = 0;
      if (age == 1) {
        taxbale_amount = overallIncome - 800000;
        taxAmount = (taxbale_amount * 30) / 100;
        actualAmount = overallIncome - taxAmount;

        console.log(`Your actual income after tax deduction is ${actualAmount}`);

      }
      else if (age == 2) {
        taxbale_amount = overallIncome - 800000;
        taxAmount = (taxbale_amount * 40) / 100;
        actualAmount = overallIncome - taxAmount;
        console.log(`Your actual income after tax deduction is ${actualAmount}`);
      }
      else {
        taxbale_amount = overallIncome - 800000;
        taxAmount = (taxbale_amount * 10) / 100;
        actualAmount = overallIncome - taxAmount;
        console.log(`Your actual income after tax deduction is ${actualAmount}`);
      }
    }

    let formattedAmount = actualAmount.toLocaleString();
    console.log(formattedAmount); // Output: "1,234,567.89"

    let formattedAmountWithOptions = actualAmount.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR'
    });

    console.log(formattedAmountWithOptions); // Output: "$1,234,567.89"


    let a = document.getElementById("result");
    console.log(formattedAmountWithOptions);
    a.innerText = formattedAmountWithOptions;
    
  }





});

// JS code for tax deduction logic ends here