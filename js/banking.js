document.getElementById('deposit-button').addEventListener('click', function () {
    //console.log('test');
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //console.log(depositAmount);

    //Get Current Deposit
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    //console.log(depositTotalText);

    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    //clear input text
    depositInput.value = '';
})

//Withdraw Amount

document.getElementById('withdraw-button').addEventListener('click', function () {
    //console.log('test');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    //console.log(depositAmount);

    //Get Current Deposit
    const WithdrawTotal = document.getElementById('withdraw-total');

    const WithdrawTotalText = WithdrawTotal.innerText;
    //console.log(depositTotalText);

    const previousWithdrawTotal = parseFloat(WithdrawTotalText);

    WithdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //clear input text
    withdrawInput.value = '';
})

