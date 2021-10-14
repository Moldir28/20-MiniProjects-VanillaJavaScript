const form = document.getElementById('form'); 
const username = document.getElementById('username'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const password2 = document.getElementById('password2'); 

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'; 
    const small = formControl.querySelector('small'); 
    small.innerText = message; 
}

// Show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}


// Check email is valid with regex
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    } else {
      showError(input, 'Email is not valid')
    }
}


//Check required fields (trim -removes all the white space)
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
      if(input.value.trim() === '') {
          showError(input, `${getFieldName(input)} is required`); 
      }
      else {
          showSuccess(input)
      }

    })
}

//Check input length 
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

//Check password match 
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}


//Get field name (charAt - character at, to target the specific character; slice - divides the text from the provided order, here it is the character at the 1st index)
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}

//Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25); 
    checkEmail(email);
    checkPasswordMatch(password, password2)
})



/* ALTERNATIVE CODE WITH IF/ELSE
if(username.value === '') {
    showError(username, 'Username is required'); 
} else {
    showSuccess(username); 
}

if(email.value === '') {
    showError(email, 'Email is required'); 
} else if(!isValidEmail(email.value)) {
   showError(email, 'Email is not valid');     
} else {
    showSuccess(email); 
}

if(password.value === '') {
    showError(password, 'Password is required'); 
} else {
    showSuccess(password); 
}

if(password2.value === '') {
    showError(password2, 'Password is required'); 
} else {
    showSuccess(password2); 
}

*/