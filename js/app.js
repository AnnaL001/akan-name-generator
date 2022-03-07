//Fetch HTML elements
let form = document.getElementById('akan-name-generator-form');
let birth_date = document.getElementById('birth_date');
let gender = document.getElementById('gender');
let alertSection = document.getElementById('alerts');

form.addEventListener('submit', function(event){
  event.preventDefault();
  if(!isDateValid(birth_date.value)){
    displayErrorMessage('Please input correct date format; DD-MM-YYYY according to calendar');
  } else {
    // Compute values needed to determine the day of the week 
    let century = parseInt(birth_date.value.split('-')[2].slice(0,2));
    let year = parseInt(birth_date.value.split('-')[2].slice(2,));
    let month = parseInt(birth_date.value.split('-')[1]);
    let day = parseInt(birth_date.value.split('-')[0]);

    // Compute the day of the week
    let dayOfTheWeek = (((century/4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
    // Generate the Akan Name and display it to the user
    let result = generateAkanName(gender, computedDayOfTheWeek(dayOfTheWeek,year, month));
    console.log(`${dayOfTheWeek} - ${computedDayOfTheWeek(dayOfTheWeek,year, month)}`);
    displaySuccessMessage(`Your Akan Name is ${result[0]} as you were born on ${result[1]}`);
  } 
});

/**
 * 
 * @param {*} birth_day Day of birth
 * @returns If day of birth is valid
 */
const isDateValid = (birth_day) => {
  let isValid = false;

  if(/^\d{2}-\d{2}-\d{4}$/.test(birth_day)){
    let day = parseInt(birth_day.split('-')[0]);
    let month = parseInt(birth_day.split('-')[1]);
    let year = parseInt(birth_day.split('-')[2]);
    if(validateDay(day, month, year) && validateMonth(month)){
      isValid = true;
    } 
  }

  return isValid;
}

/**
 * 
 * @param {*} birth_day Day of the birthday
 * @param {*} birth_year Year of birth
 * @param {*} birth_month Birthday month
 * @returns Computed day of the week
 */

const computedDayOfTheWeek = (birth_day, birth_year, birth_month) => {
  let roundedNumber = birth_day.toFixed(1);

  // If calculated day is greater than 6, minus 7 to push to another week thus traverse Akan Array Names again
  if(parseInt(roundedNumber.split(".")[0]) >= 7){
    roundedNumber = parseInt(roundedNumber) - 7;
  }

  // If the day results in a decimal point with tenth value not equal to 0, the day is evaluates to the next day
  if(parseInt(roundedNumber.split(".")[1]) !== 0){
    // Check for leap year
	  if(birth_year % 4 === 0){
      // Check if month is passed March
      if(birth_month < 3){
        if(birth_month === 2){
          roundedNumber = parseInt(roundedNumber.split(".")[0]) + 2;
        } else {
          roundedNumber = parseInt(roundedNumber.split(".")[0]) + 1;
        }
      } else {
        roundedNumber = parseInt(roundedNumber.split(".")[0]);
      }
      
      // Handle out of bound values
      if(roundedNumber >= 7){
        roundedNumber = parseInt(roundedNumber) - 7;
      }else if(roundedNumber < 0){
        roundedNumber = parseInt(roundedNumber) + 7;
      }

    } else {
      // Check if month is passed March
      if(birth_month < 3){
        roundedNumber = parseInt(roundedNumber.split(".")[0]) + 2;
      }else if(birth_month === 5 || birth_month === 7 || birth_month === 10 || birth_month === 12){
        roundedNumber = parseInt(roundedNumber.split(".")[0]) - 1;
      } else {
        roundedNumber = parseInt(roundedNumber.split(".")[0]);
      }

      // Handle out of bound values
      if(roundedNumber >= 7){
        roundedNumber = parseInt(roundedNumber) - 7;
      } else if (roundedNumber < 0){
        roundedNumber = parseInt(roundedNumber) + 7
      }
    }
  } else {
    roundedNumber = parseInt(roundedNumber.split(".")[0]);
    
    // Handle out of bound values
    if(roundedNumber < 0){
      roundedNumber = parseInt(roundedNumber) + 7;
    }
  }
  return roundedNumber;
}

/**
 * 
 * @param {*} birth_day Day of the birth
 * @param {*} birth_month Birthday month
 * @param {*} birth_year Year of birth
 * @returns if day of the birth is valid
 */
const validateDay = (birth_day, birth_month, birth_year) => {
  let isDayValid;
  if(birth_year % 4 === 0){
    if(birth_month === 2){
      isDayValid = birth_day > 29 || birth_day <= 0 ? false : true;
    } else {
      isDayValid = birth_day <= 0 || birth_day > 31 ? false : true;
    }
  } else {
    if(birth_month === 2){
      isDayValid = birth_day > 28 || birth_day <= 0 ? false : true;
    } else {
      isDayValid = birth_day <= 0 || birth_day > 31 ? false : true;
    }
  }
  return isDayValid;
}

/**
 * 
 * @param {*} birth_month Birthday month
 * @returns If birthday month is valid
 */

const validateMonth = (birth_month) => {
  let isMonthValid = birth_month <= 0 || birth_month > 12 ? false : true;
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




