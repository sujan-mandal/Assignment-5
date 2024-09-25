    
   
      //  Part-1

document
  .getElementById("donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donationMoney = document.getElementById(
      "donation-amount-input"
    ).value;
    console.log(donationMoney);
    const balance = document.getElementById("main-balance").innerText;
    console.log(balance);
    const totalDonation = document.getElementById("total-donation").innerText;
    console.log(totalDonation);

    const donationMoneyNumber = parseFloat(donationMoney);
    const totalDonationNumber = parseFloat(totalDonation);
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber - donationMoneyNumber;
    const updateBalance = totalDonationNumber + donationMoneyNumber;

    if (inputValidation(donationMoneyNumber)) {
      return;
    } else if (donationValidation(donationMoneyNumber, balanceNumber)) {
      return;
    }

    // Update Amount
    document.getElementById("main-balance").innerText = newBalance;
    document.getElementById("total-donation").innerText = updateBalance;

    const title = `${donationMoneyNumber} Donate for Flood at Noakhali, Bangladesh,Bangladesh`;
    storeDonationHistory(donationMoneyNumber, title);

    my_modal_5.showModal();
  });

//    Part-2

document
  .getElementById("donate-btn2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donationMoney2 = document.getElementById(
      "donation-amount-input2"
    ).value;
    console.log(donationMoney2);
    const balance2 = document.getElementById("main-balance").innerText;
    console.log(balance2);
    const totalDonation2 = document.getElementById("total-donation2").innerText;
    console.log(totalDonation2);

    const donationMoneyNumber2 = parseFloat(donationMoney2);
    const totalDonationNumber2 = parseFloat(totalDonation2);
    const balanceNumber2 = parseFloat(balance2);
    const newBalance2 = balanceNumber2 - donationMoneyNumber2;
    const updateBalance2 = totalDonationNumber2 + donationMoneyNumber2;
    console.log(newBalance2, updateBalance2);
    // Update Amount
    document.getElementById("main-balance").innerText = newBalance2;
    document.getElementById("total-donation2").innerText = updateBalance2;

    if (inputValidation(donationMoneyNumber2)) {
      return;
    } else if (donationValidation(donationMoneyNumber2, balanceNumber2)) {
      return;
    }

    // Update Amount
    document.getElementById("main-balance").innerText = newBalance2;
    document.getElementById("total-donation").innerText = updateBalance2;

    const title = `${donationMoneyNumber2} Donate for Flood Relief in Feni,Bangladesh`;
    storeDonationHistory(donationMoneyNumber2, title);

    my_modal_5.showModal();
  });


// Part-3

document
  .getElementById("donate-btn3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donationMoney3 = document.getElementById(
      "donation-amount-input3"
    ).value;
    console.log(donationMoney3);
    const balance3 = document.getElementById("main-balance").innerText;
    console.log(balance3);
    const totalDonation3 = document.getElementById("total-donation3").innerText;
    console.log(totalDonation3);

    const donationMoneyNumber3 = parseFloat(donationMoney3);
    const totalDonationNumber3 = parseFloat(totalDonation3);
    const balanceNumber3 = parseFloat(balance3);
    const newBalance3 = balanceNumber3 - donationMoneyNumber3;
    const updateBalance3 = totalDonationNumber3 + donationMoneyNumber3;
    console.log(newBalance3, updateBalance3);
    // Update Amount
    document.getElementById("main-balance").innerText = newBalance3;
    document.getElementById("total-donation3").innerText = updateBalance3;

    if (inputValidation(donationMoneyNumber3)) {
      return;
    } else if (donationValidation(donationMoneyNumber3, balanceNumber3)) {
      return;
    }

    // Update Amount
    document.getElementById("main-balance").innerText = newBalance3;
    document.getElementById("total-donation").innerText = updateBalance3;

    const title = `${donationMoneyNumber3} Aid for Injured in the Quota Movement`;
    storeDonationHistory(donationMoneyNumber3, title);

    my_modal_5.showModal();
  });


// check the input validation
function inputValidation(inputValue) {
  if (inputValue <= 0) {
    alert("Your amount is invalid");
    return true;
  }
}

// check the donation and main balance amount
function donationValidation(inputValue, mainBalance) {
  if (inputValue > mainBalance) {
    alert("Your main balance is lower than donation amount");
    return true;
  }
}

document
  .getElementById("donation-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("history-btn").classList.remove("bg-[#B4F461]");
    document.getElementById("donation-btn").classList.add("bg-[#B4F461]");

    document.getElementById("history-section").style.display = "none";
    document.getElementById("donation-section").style.display = "block";
  });

document
  .getElementById("history-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
    document.getElementById("history-btn").classList.add("bg-[#B4F461]");

    document.getElementById("donation-section").style.display = "none";
    document.getElementById("history-section").style.display = "block";

    let donationHistoryList =
      JSON.parse(sessionStorage.getItem("donationHistory")) || [];

    const historySection = document.getElementById("history-section");

    historySection.innerHTML = "";

    if (donationHistoryList.length === 0) {
      historySection.innerHTML = "<p>No donation history found.</p>";
    } else {
      const historyList = document.createElement("ul");

      donationHistoryList.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <div style="padding: 10px; background-color: #f9f9f9; border-radius: 5px; margin-bottom: 10px;">
            <p style="font-size: 22px; font-weight: 700">${entry.title} </p>
           <p>${entry.date}</p>
          </div>
        `;
        historyList.appendChild(listItem);
      });

      historySection.appendChild(historyList);
    }
  });

function storeDonationHistory(amount, title) {
  const donationHistory = {
    amount: amount,
    date: new Date().toLocaleString(),
    title: title,
  };

  let donationHistoryList =
    JSON.parse(sessionStorage.getItem("donationHistory")) || [];

  donationHistoryList.push(donationHistory);

  sessionStorage.setItem(
    "donationHistory",
    JSON.stringify(donationHistoryList)
  );
}
