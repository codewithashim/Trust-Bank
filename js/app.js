document.getElementById("depositBtn").addEventListener("click", function () {
  const newDepositAmount = getInputValue("depositInput");
  // previus total
  const previusDipostTotal = getTextElimentById("dipositTotal");
  // total diposit calculation
  const newDipositTotal = previusDipostTotal + newDepositAmount;
  //set new value
  setTextElimentValue("dipositTotal", newDipositTotal);
  // get previus balance
  const previuseBalanceTotal = getTextElimentById("balanceTotal");
  const newBalanceTotal = previuseBalanceTotal + newDepositAmount;
  setTextElimentValue("balanceTotal", newBalanceTotal);
});

// widrow

document.getElementById("widrowBtn").addEventListener("click", function () {
  const newWidrowAmount = getInputValue("widrowInput");
  const previusWidrowTotal = getTextElimentById("widrowAmount");
  const newWidrowTotal = previusWidrowTotal + newWidrowAmount;
  setTextElimentValue("widrowAmount", newWidrowTotal);

  const previusBalanceTotal = getTextElimentById("balanceTotal");
  const newWidrowBalanceTotal = previusBalanceTotal - newWidrowAmount;
  setTextElimentValue("balanceTotal", newWidrowBalanceTotal);
});
