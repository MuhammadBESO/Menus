const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const ageInput = document.getElementById('age');
const passwordInput = document.getElementById('password');
const repasswordInput = document.getElementById('repassword');
const submitButton = document.getElementById('submitButton');

const regexName = /^[A-Za-z\s]+$/;
const regexEmail = /^[0-9A-Za-z]{1,20}@[A-Za-z]{1,3}\.[A-Za-z]{1,3}$/;
const regexPhone = /^\+?\d{11}$/;
const regexAge = /^(0?[0-9]|[1-8][0-9]|99)$/;
const regexPassword =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let focusedInput = null;

function validateForm() {
    const inputs = [nameInput, emailInput, phoneInput, ageInput, passwordInput, repasswordInput];
    let isValid = true;

    inputs.forEach((input) => {
        const errorDiv = document.getElementById(`${input.id}Error`);

        if (input === focusedInput || input.value.length > 0) {
            if (input === nameInput && !regexName.test(input.value)) {
                errorDiv.style.display = 'block';
                input.classList.add('input-error');
                isValid = false;
            } else if (input === emailInput && !regexEmail.test(input.value)) {
                errorDiv.style.display = 'block';
                input.classList.add('input-error');
                isValid = false;
            } else if (input === phoneInput && !regexPhone.test(input.value)) {
                errorDiv.style.display = 'block';
                input.classList.add('input-error');
                isValid = false;
            } else if (input === ageInput && !regexAge.test(input.value)) {
                errorDiv.style.display = 'block';
                input.classList.add('input-error');
                isValid = false;
            } else if (input === passwordInput && !regexPassword.test(input.value)) {
                errorDiv.style.display = 'block';
                console.log(input.value);
                console.log(passwordInput);
                
                input.classList.add('input-error');
                isValid = false;
            } else if (input === repasswordInput && input.value !== passwordInput.value) {
                errorDiv.style.display = 'block';
                input.classList.add('input-error');
                isValid = false;
            } else {
                errorDiv.style.display = 'none';
                input.classList.remove('input-error');
            }
        } else {
            errorDiv.style.display = 'none';
            submitButton.disabled = isValid;
        }
    });

    submitButton.disabled = !isValid;
}

function handleFocus(input) {
    focusedInput = input;
    validateForm();
}

const inputs = [nameInput, emailInput, phoneInput, ageInput, passwordInput, repasswordInput];

inputs.forEach(input => {
    input.addEventListener('focus', () => handleFocus(input));
    input.addEventListener('input', validateForm);
});
$(".open-close-icon").on("click", function () {
    const icon = $(".open-close-icon");
    const sideNav = $(".side-nav-menu");
    if (icon.hasClass("fa-bars")) {
        sideNav.animate({ left: "0px" }, 500);
        icon.removeClass("fa-bars").addClass("fa-x");
        $(" li").each(function (index) {
            $(this)
                .delay(index * 100)
                .animate({ top: "0px" }, 500);
        });
    } else if (icon.hasClass("fa-x")) {
        sideNav.animate({ left: "-256.562px" }, 500);
        icon.removeClass("fa-x").addClass("fa-bars");
        $(".li-links").animate({ top: "300px" }, 500);
    }
});


//*********************************
//This for calling links of side bar
//*********************************
function showSearchInputs() {
    window.location.href = "search.html";
    searchByname()
    searchByCharacter()
 
}
function showCategories() {
    window.location.href = "categories.html";
    getCategoriesinfo()();
}
function getArea() {
    window.location.href = "area.html";
    areaData();
}
function getIngredients() {
    window.location.href = "ingredient.html";
    areaData();
}
function showContacts(){
    window.location.href = "contact.html";
    validateForm() 
}


//*********************************
//This function for loading screen
//*********************************
 function showDivForOneSecond() {
            const myDiv = document.getElementById('myDiv');
            myDiv.style.display = 'block'; // Show the div

            setTimeout(() => {
                myDiv.style.display = 'none'; // Hide the div after 1 second
            }, 700); // 1000 milliseconds = 1 second
        }
        window.onload = showDivForOneSecond