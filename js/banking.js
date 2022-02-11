//Deposit
const depositButton = document.getElementById("deposit-button");
depositButton.addEventListener("click", function () {
  {
    //Deposit Input
    const depositInputField = document.getElementById("deposit-input");
    const depositInputText = depositInputField.value;
    const depositAmount = parseFloat(depositInputText);
    // console.log("Deposit Input:" depositAmount);

    //Previous Deposit
    const previousDeposit = document.getElementById("deposit");
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    // console.log("Previous Deposit:", previousDepositAmount);

    //Total Deposit
    const totalDeposit = previousDepositAmount + depositAmount;
    previousDeposit.innerText = totalDeposit;
    // console.log("Total Deposit", totalDeposit);

    //Clear Deposit Input Field
    depositInputField.value = "";

    //Balance Calculation After Deposit
    const previousBalance = document.getElementById("balance");
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    // console.log("Previous Balance:", previousBalanceAmount);

    //Current Balance
    const currentBalance = previousBalanceAmount + depositAmount;
    previousBalance.innerText = currentBalance;
    // console.log("TCurrent Balance After Deposit", currentBalance);
  }
});

//Withdraw
const withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function () {
  {
    //Withdraw Input
    const withdrawInputField = document.getElementById("withdraw-input");
    const withdrawnputText = withdrawInputField.value;
    const withdrawAmount = parseFloat(withdrawnputText);
    // console.log("Withdraw Input:", withdrawAmount);

    //Previous Withdraw
    const previousWithdraw = document.getElementById("withdraw");
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    // console.log("Previous Withdraw:", previousWithdrawAmount);

    //Total Withdraw
    const totalWithdraw = previousWithdrawAmount + withdrawAmount;
    previousWithdraw.innerText = totalWithdraw;
    // console.log("Total Withdraw",totalWithdraw);

    //Clear Withdraw Input Field
    withdrawInputField.value = "";

    //Balance Calculation After Withdraw
    const previousBalance = document.getElementById("balance");
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    // console.log("Previous Balance:", previousBalanceAmount);

    //Current Balance
    const currentBalance = previousBalanceAmount - withdrawAmount;
    previousBalance.innerText = currentBalance;
    // console.log("Current Balance After Withdraw", currentBalance);
  }
});
