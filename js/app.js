//Add validation
let form = document.getElementById('akan-name-generator-form');
let birth_date = document.getElementById('birth-date');
let gender = document.getElementById('gender');
let alertSection = document.getElementById('alerts');

form.addEventListener('submit', function(event){
  event.preventDefault();
  dateValidation();
});

// Form validation
const isDateValid = (input) => {
  let isValid = false;

  if(/^\d{2}-\d{2}-\d{4}$/.test(input)){
    let day = input.split('-')[0];
    let month = input.split('-')[1];
    if(dayValidation(day) && monthValidation(month)){
      isValid = true;
    } 
  }

  return isValid;
}

const dateValidation = () => {
  if(!isDateValid(birth_date.value)){
    displayErrorMessage('Please input correct date format; DD-MM-YYYY where DD is within range 1 - 31 and MM is within range 1 - 12');
  }
}

const dayValidation = (input) => {
  let isDayValid;
  if(input <= 0 || input > 31){
    isDayValid = false;
  } else {
    isDayValid = true;
  }
  return isDayValid;
}

const monthValidation = (input) => {
  let isMonthValid;
  if(input <= 0 || input > 12){
    isMonthValid = false;
  } else {
    isMonthValid = true;
  }
  return isMonthValid;
}

function displayErrorMessage(message){
  let div = document.createElement('div');
  div.classList.add('alert','alert-danger');
  div.setAttribute('role', 'alert');
  div.textContent = message;
  alertSection.appendChild(div);
}

function displaySuccessMessage(message){
  let div = document.createElement('div');
  div.classList.add('alert','alert-success');
  div.setAttribute('role', 'alert');
  div.textContent = message;
  alertSection.appendChild(div);
}

// Generate Akan Name






