document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById("withdraw-input")
    const previousWithdrawAmount = getElementValueById('withdraw-amount')
    const previousBalanceAmount = getElementValueById('balance-amount');   
    if (newWithdrawAmount > previousBalanceAmount) {
      alert('please input valid amount')
      return;
    }
    const totalWithdrawBalance = previousWithdrawAmount + newWithdrawAmount;
    setElementValueById('withdraw-amount', totalWithdrawBalance)


           
   
    const  currentTotalBalance = previousBalanceAmount - newWithdrawAmount; 
    setElementValueById('balance-amount', currentTotalBalance)
    console.log(newWithdrawAmount);
  
  })