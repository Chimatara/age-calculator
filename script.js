  const day = document.getElementById("dayInput");
  const month = document.getElementById("monthInput");
  const year = document.getElementById("yearInput");


document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();

calculateAge();
validateInputs()
});

  // Listen for Enter key press in any input field
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      calculateAge();
      validateInputs()
    }
  });

  // seterror
  const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error')

    errorDisplay.innerText = message;
    input.classList.add('error')
    input.classList.remove('success')
  }

  // set success
  const setSuccess = (element) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error')

    errorDisplay.innerText = '';
    input.classList.add('success')
    input.classList.remove('error')
  }

  function validateInputs(){
   const dayValue = day.value.trim()
   const monthValue = month.value.trim()
   const yearValue = year.value.trim()

    if(dayValue === ''){
      setError(day, 'This field is required')
    } else if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
      setError(day, 'Must be a valid day');
    }
    else{
      setSuccess(day)
    }

    if(monthValue === ''){
      setError(month, 'This field is required' )
    } else{
      setSuccess(month)
    }

    if(yearValue === ''){
      setError(year, 'This field is required')
    } else{
      setSuccess(year)
    }

    const hasError = document.querySelectorAll('.input.error').length > 0;
    // If any input has an error, do not proceed with age calculation
    if (hasError) {
      console.error('Invalid input. Please correct the errors.');
      return;
    }

    calculateAge()

  }


function calculateAge() {

  const hasError = document.querySelectorAll('.error').length > 0;

  // If there are validation errors, do not proceed with age calculation
  if (hasError) {
    console.error('Cannot calculate age due to validation errors.');
    return;
  }
  // Retrieve input values
  const day = document.getElementById("dayInput").value;
  const month = document.getElementById("monthInput").value;
  const year = document.getElementById("yearInput").value;

  if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
    console.error("Invalid input. Please enter valid values.");
    return;
  }

  // Perform age calculation (you need to implement your logic here)
  // For simplicity, let's assume today's date is October 17, 2023
  const today = new Date(2023, 9, 17);
  const birthDate = new Date(year, month - 1, day); // month is 0-indexed

  const ageInMilliseconds = today - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.44; // average days in a month

  const years = Math.floor(ageInDays / 365);
  const months = Math.floor(ageInMonths % 12);
  const days = Math.floor(ageInDays % 365);

  // Update the result span tags
  document.getElementById("yearsSpan").innerText = years;
  document.getElementById("monthSpan").innerText = months;
  document.getElementById("daysSpan").innerText = days;
}