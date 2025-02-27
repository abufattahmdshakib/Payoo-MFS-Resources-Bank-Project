document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = document.getElementById('bank-account').value;
    const amountAdd = document.getElementById('amount-add').value;
    const convertAmaount = parseFloat(amountAdd);
    const pinNumber = document.getElementById('pin-number').value;
    const convertPin = parseInt(pinNumber);
    const mainMoney = document.getElementById('main-money').innerText;
    const convertMainBalance = parseFloat(mainMoney);
    if (addMoney.length === 11) {
        if (convertPin === 1234) {
            const sum = convertAmaount + convertMainBalance;
            document.getElementById('main-money').innerText = sum;
        }
        else {
            alert('Wrong Password Please Try Again');
        }
    }
    else {
        alert('Please enter 11 digits.');
    }
})