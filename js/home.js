document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const donationMoney = document.getElementById('donation-amount-input').value;
    console.log(donationMoney);
});