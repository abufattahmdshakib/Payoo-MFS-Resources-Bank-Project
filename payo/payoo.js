//setp 1 login button event  
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('Mobile-Number').value;
    const digitPin = document.getElementById('digit-pin').value;
    const convertPin = parseInt(digitPin);
    if (mobileNumber.length === 11) {
        if (convertPin === 1234) {
            window.location.href = './second-page.html';
        }
        else {
            alert('Wrong Password Please Try Again');
        }
    }
    else {
        alert('Please enter 11 digits.');
    }
})