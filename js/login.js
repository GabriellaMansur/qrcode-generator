
const input = document.querySelector('.login_input');
const inputBtn = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

const validateInput = ({ target }) => {
    if( target.value.length > 3) {
        inputBtn.removeAttribute('disabled');
    } else {
        inputBtn.setAttribute('disabled', '');
    }
}

const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('user', input.value);

    window.location = 'pages/qrGenerator.html'
}

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);