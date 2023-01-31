const form = document.querySelector('.form')
const emailFrom = document.getElementById('email-from')
const emailTo = document.getElementById('email-to')
const date = document.getElementById('date')
const content = document.getElementById('content')
const checkbox = document.getElementById('checkbox')
const checkboxWrapper = document.querySelector('.checkbox-wrap')
const submit = document.querySelector('.submit-btn')
const file = document.querySelector('.input-file input[type=file]')
const checkboxLabel = document.querySelector('.checkbox-label')
const contentWrapper = document.querySelector('.content-wrap')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const options = {method: 'post', body: new FormData(this)}

    fetch('/', options)

        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then((data) => {
            // console.log(data)
            emailFrom.textContent = data.from.value[0].address;
            emailTo.textContent = data.to.text;
            date.textContent = data.date.slice(0, 19).replace('T', ' ');
            content.innerHTML = data.html;
            checkboxWrapper.classList.remove('hidden');
            submit.setAttribute("disabled", "disabled")
        })
        .catch((error) => {
            console.log('Something went wrong.', error);
        });
})

file.addEventListener('change', function () {
    submit.removeAttribute('disabled')
});

checkbox.addEventListener("change", function () {
    if (this.checked) {
        checkboxLabel.textContent = 'hide details';
        contentWrapper.classList.add('active');
    } else {
        checkboxLabel.textContent = 'show details';
        contentWrapper.classList.remove('active');
    }
})
