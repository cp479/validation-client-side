document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const zip = document.getElementById('zip');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const emailError = document.getElementById('emailError');
    const countryError = document.getElementById('countryError');
    const zipError = document.getElementById('zipError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    email.addEventListener('input', () => validateEmail());
    country.addEventListener('input', () => validateCountry());
    zip.addEventListener('input', () => validateZip());
    password.addEventListener('input', () => validatePassword());
    confirmPassword.addEventListener('input', () => validateConfirmPassword());

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert("High five! Form submitted successfully.");
        } else {
            alert("Please fill in all fields correctly.");
        }
    });

    function validateEmail() {
        if (!email.validity.valid) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    function validateCountry() {
        if (country.value.trim() === "") {
            countryError.textContent = "Country is required.";
            return false;
        } else {
            countryError.textContent = "";
            return true;
        }
    }

    function validateZip() {
        if (zip.value.trim() === "") {
            zipError.textContent = "Zip Code is required.";
            return false;
        } else {
            zipError.textContent = "";
            return true;
        }
    }

    function validatePassword() {
        if (password.value.trim() === "") {
            passwordError.textContent = "Password is required.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    }

    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            return false;
        } else if (confirmPassword.value.trim() === "") {
            confirmPasswordError.textContent = "Password confirmation is required.";
            return false;
        } else {
            confirmPasswordError.textContent = "";
            return true;
        }
    }

    function validateForm() {
        return validateEmail() & validateCountry() & validateZip() & validatePassword() & validateConfirmPassword();
    }
});
