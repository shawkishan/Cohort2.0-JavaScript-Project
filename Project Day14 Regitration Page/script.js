const el = {
    nameInput: document.querySelector("#nameInp"),
    emailInput: document.querySelector("#emailInp"),
    passwordInput: document.querySelector("#passwordInp"),
    confirmPasswordInput: document.querySelector("#Confirm-password-inp"),
    phoneInput: document.querySelector("#numInp"),

    nameInfo: document.querySelector("#nameInfo"),
    emailInfo: document.querySelector("#emailInfo"),
    passwordInfo: document.querySelector("#passwordInfo"),
    confirmPasswordInfo: document.querySelector("#Confirm-password-info"),
    phoneInfo: document.querySelector("#numInfo"),

    notValid: document.querySelector("#notValid"),

    form: document.querySelector("form"),
    submitBtn: document.querySelector('input[type="submit"]'),

    success: document.querySelector("#success")
};
const details = {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    phone: null
};
let formValidated = {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false
};



function reloadForm() {
    let data = localStorage.getItem('details');
    if (data !== null) {
        data = JSON.parse(data);
        el.nameInput.value = data.name;
        el.emailInput.value = data.email;
        el.passwordInput.value = data.password;
        el.confirmPasswordInput.value = data.confirmPassword;
        el.phoneInput.value = data.phone;
        details.name = data.name;
        details.email = data.email;
        details.password = data.password;
        details.phone = data.phone;
        validateName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        validatePhone();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    reloadForm();
});

function validateName() {
    let val = el.nameInput.value;

    if (val.length < 4) {
        el.nameInfo.style.display = "block";
        formValidated.name = false;
        el.nameInput.classList.add("not-valid");
        el.nameInput.classList.remove("valid");
    } else {
        el.nameInfo.style.display = "none";
        formValidated.name = true;
        el.nameInput.classList.remove("not-valid");
        el.nameInput.classList.add("valid");
    }

    details.name = val;
    localStorage.setItem("details", JSON.stringify(details));
}

function validateEmail() {
    let val = el.emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(val)) {
        el.emailInfo.style.display = "block";
        formValidated.email = false;
        el.emailInput.classList.add("not-valid");
        el.emailInput.classList.remove("valid");
    } else {
        el.emailInfo.style.display = "none";
        formValidated.email = true;
        el.emailInput.classList.remove("not-valid");
        el.emailInput.classList.add("valid");
    }

    details.email = val;
    localStorage.setItem("details", JSON.stringify(details));
}

function validatePassword() {
    let val = el.passwordInput.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!passwordRegex.test(val)) {
        el.passwordInfo.style.display = "block";
        formValidated.password = false;
        el.passwordInput.classList.add("not-valid");
        el.passwordInput.classList.remove("valid");
    } else {
        el.passwordInfo.style.display = "none";
        formValidated.password = true;
        el.passwordInput.classList.remove("not-valid");
        el.passwordInput.classList.add("valid");
    }

    details.password = val;
    localStorage.setItem("details", JSON.stringify(details));
}

function validateConfirmPassword() {
    let val = el.confirmPasswordInput.value;

    if (el.passwordInput.value !== val) {
        el.confirmPasswordInfo.style.display = "block";
        formValidated.confirmPassword = false;
        el.confirmPasswordInput.classList.add("not-valid");
        el.confirmPasswordInput.classList.remove("valid");
    } else {
        el.confirmPasswordInfo.style.display = "none";
        formValidated.confirmPassword = true;
        el.confirmPasswordInput.classList.remove("not-valid");
        el.confirmPasswordInput.classList.add("valid");
    }

    details.confirmPassword = val;
    localStorage.setItem("details", JSON.stringify(details));
}

function validatePhone() {
    let val = el.phoneInput.value;
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(val)) {
        el.phoneInfo.style.display = "block";
        formValidated.phone = false;
        el.phoneInput.classList.add("not-valid");
        el.phoneInput.classList.remove("valid");
    } else {
        el.phoneInfo.style.display = "none";
        formValidated.phone = true;
        el.phoneInput.classList.remove("not-valid");
        el.phoneInput.classList.add("valid");
    }

    details.phone = val;
    localStorage.setItem("details", JSON.stringify(details));
}

el.nameInput.addEventListener("input", validateName);
el.emailInput.addEventListener("input", validateEmail);
el.passwordInput.addEventListener("input", validatePassword);
el.confirmPasswordInput.addEventListener("input", validateConfirmPassword);
el.phoneInput.addEventListener("input", validatePhone);

el.form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formValidated.name && formValidated.email && formValidated.password && formValidated.phone && formValidated.confirmPassword) {
        el.success.style.display = "block";
        el.notValid.style.display = "none";
    } else {
        el.success.style.display = "none";
        el.notValid.style.display = "block";
    }
});