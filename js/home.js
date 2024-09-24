document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const donationMoney = document.getElementById('donation-amount-input').value;
    console.log(donationMoney);
    const balance = document.getElementById('main-balance').innerText;
    console.log(balance);
    const totalDonation = document.getElementById('total-donation').innerText;
    console.log(totalDonation);

    const donationMoneyNumber = parseFloat(donationMoney);
    const totalDonationNumber = parseFloat(totalDonation);
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber - donationMoneyNumber;
    const updateBalance = totalDonationNumber + donationMoneyNumber;
    console.log(newBalance, updateBalance);
    // Update Amount
    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('total-donation').innerText = updateBalance
    
});


            //    Part-2

document.getElementById('donate-btn2').addEventListener('click', function (event) {
    event.preventDefault();
    const donationMoney2 = document.getElementById('donation-amount-input2').value;
    console.log(donationMoney2);
    const balance2 = document.getElementById('main-balance').innerText;
    console.log(balance2);
    const totalDonation2 = document.getElementById('total-donation2').innerText;
    console.log(totalDonation2);

    const donationMoneyNumber2 = parseFloat(donationMoney2);
    const totalDonationNumber2 = parseFloat(totalDonation2);
    const balanceNumber2 = parseFloat(balance2);
    const newBalance2 = balanceNumber2 - donationMoneyNumber2;
    const updateBalance2 = totalDonationNumber2 + donationMoneyNumber2;
    console.log(newBalance2, updateBalance2);
    // Update Amount
    document.getElementById('main-balance').innerText = newBalance2;
    document.getElementById('total-donation2').innerText = updateBalance2
});

             // Part-3

document.getElementById('donate-btn3').addEventListener('click', function (event) {
    event.preventDefault();
    const donationMoney3 = document.getElementById('donation-amount-input3').value;
    console.log(donationMoney3);
    const balance3 = document.getElementById('main-balance').innerText;
    console.log(balance3);
    const totalDonation3 = document.getElementById('total-donation3').innerText;
    console.log(totalDonation3);

    const donationMoneyNumber3 = parseFloat(donationMoney3);
    const totalDonationNumber3 = parseFloat(totalDonation3);
    const balanceNumber3 = parseFloat(balance3);
    const newBalance3 = balanceNumber3 - donationMoneyNumber3;
    const updateBalance3 = totalDonationNumber3 + donationMoneyNumber3;
    console.log(newBalance3, updateBalance3);
    // Update Amount
    document.getElementById('main-balance').innerText = newBalance3;
    document.getElementById('total-donation3').innerText = updateBalance3;
});