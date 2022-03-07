//Fetch HTML elements
let form = document.getElementById('akan-name-generator-form');
let birth_date = document.getElementById('birth_date');
let gender = document.getElementById('gender');
let alertSection = document.getElementById('alerts');

form.addEventListener('submit', function(event){
  event.preventDefault();
  if(!isDateValid(birth_date.value)){
    displayErrorMessage('Please input correct date format; DD-MM-YYYY where DD(day) is within range 1 - 31 and MM(month) is within range 1 - 12');
  } else {
    // Compute values needed to determine the day of the week 
    let century = parseInt(birth_date.value.split('-')[2].slice(0,2));
    let year = parseInt(birth_date.value.split('-')[2].slice(2,));
    let month = parseInt(birth_date.value.split('-')[1]);
    let day = parseInt(birth_date.value.split('-')[0]);

    // Compute the day of the week
    let dayOfTheWeek = (((century/4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
    // Generate the Akan Name and display it to the user
    let result = generateAkanName(gender, computedDayOfTheWeek(dayOfTheWeek));
    displaySuccessMessage(`Your Akan Name is ${result[0]} as you were born on ${result[1]}`);
  } 
});

/**
 * 
 * @param {*} input a birth date value
 * @returns if birth date is valid
 */
const isDateValid = (input) => {
  let isValid = false;

  if(/^\d{2}-\d{2}-\d{4}$/.test(input)){
    let day = parseInt(input.split('-')[0]);
    let month = parseInt(input.split('-')[1]);
    let year = parseInt(input.split('-')[2]);
    if(validateDay(day) && validateMonth(month)){
      isValid = true;
    } 
  }

  return isValid;
}

/**
 * 
 * @param {*} number generated day of the week by the formula to get day of the week
 * @returns the final computed day of the week
 */

const computedDayOfTheWeek = (number) => {
  let roundedNumber = number.toFixed(1);
  // If the day results in a decimal point with tenth value not equal to 0, the day is equal to the next day
  if(parseInt(roundedNumber.split(".")[1]) !== 0){
	  roundedNumber = parseInt(roundedNumber.split(".")[0]) + 1;
  } else {
    roundedNumber = parseInt(roundedNumber.split(".")[0])
  }
  return roundedNumber;
}

/**
 * 
 * @param {*} input a day value
 * @returns if day value is valid
 */
const validateDay = (input) => {
  let isDayValid;
  if(input <= 0 || input > 31){
    isDayValid = false;
  } else {
    isDayValid = true;
  }
  return isDayValid;
}

/**
 * 
 * @param {*} input a month value
 * @returns if month value is valid
 */

const validateMonth = (input) => {
  let isMonthValid;
  if(input <= 0 || input > 12){
    isMonthValid = false;
  } else {
    isMonthValid = true;
  }
  return isMonthValid;
}

/**
 * @param {*} message error message to be displayed
 */

function displayErrorMessage(message){
  let div = document.createElement('div');
  div.classList.add('alert','alert-danger');
  div.setAttribute('role', 'alert');
  div.textContent = message;
  alertSection.appendChild(div);
}

/**
 * @param {*} message success message to display
 */
function displaySuccessMessage(message){
  let div = document.createElement('div');
  div.classList.add('alert','alert-success');
  div.setAttribute('role', 'alert');
  div.textContent = message;
  alertSection.appendChild(div);
}

// Akan Names with a direct mapping of the day of the week for male and female gender
let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena' , 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

/**
 * @param {*} gender a gender value
 * @param {*} day a day value
 * @returns the generated Akan Name
 */
function generateAkanName(gender, day){
  let akanName;
  let dayOfTheWeek;
  if(gender.value === 'male'){
    switch(day){
      case 0:
        akanName = 'Kwasi';
        dayOfTheWeek = 'Sunday';
        break;
      case 1:
        akanName = 'Kwadwo';
        dayOfTheWeek = 'Monday';
        break;
      case 2:
        akanName = 'Kwabena';
        dayOfTheWeek = 'Tuesday';
        break;
      case 3:
        akanName = 'Kwaku';
        dayOfTheWeek = 'Wednesday';
        break;
      case 4:
        akanName = 'Yaw';
        dayOfTheWeek = 'Thursday';
        break;
      case 5:
        akanName = 'Kofi';
        dayOfTheWeek = 'Friday';
        break;
      case 6:
        akanName = 'Kwame';
        dayOfTheWeek = 'Saturday';
        break;
    }
  } else {
    switch(day){
      case 0:
        akanName = 'Akosua';
        dayOfTheWeek = 'Sunday';
        break;
      case 1:
        akanName = 'Adwoa';
        dayOfTheWeek = 'Monday';
        break;
      case 2:
        akanName = 'Abenaa';
        dayOfTheWeek = 'Tuesday';
        break;
      case 3:
        akanName = 'Akua';
        dayOfTheWeek = 'Wednesday';
        break;
      case 4:
        akanName = 'Yaa';
        dayOfTheWeek = 'Thursday';
        break;
      case 5:
        akanName = 'Afua';
        dayOfTheWeek = 'Friday';
        break;
      case 6:
        akanName = 'Ama';
        dayOfTheWeek = 'Saturday';
        break;
    }
  }
  return [akanName, dayOfTheWeek];
}




