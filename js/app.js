//Add validation
let form = document.getElementById('akan-name-generator-form');
let birth_date = document.getElementById('birth_date');
let gender = document.getElementById('gender');
let alertSection = document.getElementById('alerts');

form.addEventListener('submit', function(event){
  event.preventDefault();
  if(!isDateValid(birth_date.value)){
    displayErrorMessage('Please input correct date format; DD-MM-YYYY where DD(day) is within range 1 - 31 and MM(month) is within range 1 - 12');
  } else {
    // Compute day of the week 
    let century = parseInt(birth_date.value.split('-')[2].slice(0,2));
    let year = parseInt(birth_date.value.split('-')[2].slice(2,));
    let month = parseInt(birth_date.value.split('-')[1]);
    let day = parseInt(birth_date.value.split('-')[0]);

    let dayOfTheWeek = (((century/4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
    console.log(`${Math.floor(dayOfTheWeek)}`);
    let name = generateAkanName(gender, Math.floor(dayOfTheWeek));
    displaySuccessMessage(`Your Akan Name is ${name}`);
  } 
});

// Form validation
const isDateValid = (input) => {
  let isValid = false;

  if(/^\d{2}-\d{2}-\d{4}$/.test(input)){
    let day = parseInt(input.split('-')[0]);
    let month = parseInt(input.split('-')[1]);
    let year = parseInt(input.split('-')[2]);
    if(dayValidation(day, month, year) && monthValidation(month)){
      isValid = true;
    } 
  }

  return isValid;
}


const dayValidation = (input, month, year) => {
  let isDayValid;
  if(!!(year % 4 === 0 & month === 2)){
    if(input > 29 && input <= 0){
      isDayValid = false;
    } else {
      isDayValid = true;
    }
  } else if(month === 2){
    if(input > 28 && input <= 0){
      isDayValid = false;
    } else {
      isDayValid = true;
    }
  }else if(input <= 0 || input > 31){
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
let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena' , 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


function generateAkanName(gender, day){
  let akanName;
  if(gender.value === 'male'){
    switch(day){
      case 0:
        akanName = 'Kwasi';
        break;
      case 1:
        akanName = 'Kwadwo';
        break;
      case 2:
        akanName = 'Kwabena';
        break;
      case 3:
        akanName = 'Kwaku';
        break;
      case 4:
        akanName = 'Yaw';
        break;
      case 5:
        akanName = 'Kofi';
        break;
      case 6:
        akanName = 'Kwame';
        break;
    }
  } else {
    switch(day){
      case 0:
        akanName = 'Akosua';
        break;
      case 1:
        akanName = 'Adwoa';
        break;
      case 2:
        akanName = 'Abenaa';
        break;
      case 3:
        akanName = 'Akua';
        break;
      case 4:
        akanName = 'Yaa';
        break;
      case 5:
        akanName = 'Afua';
        break;
      case 6:
        akanName = 'Ama';
        break;
    }
  }
  return akanName;
}




