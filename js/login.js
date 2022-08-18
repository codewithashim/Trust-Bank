// add event hendelar in submit btn
document.getElementById("submitBtn").addEventListener("click", function () {
  // stape 2 get the email
  const emeilFild = document.getElementById("email-address").value;
  // const emailValue = emeilFild.value;
  // get password
  const passwordFild = document.getElementById("user-password").value;
  // const passwordValue = passwordFild.value;

  // verify user

  if (emeilFild === "ashim@gmail.com" && passwordFild === "ashim") {
    window.location.href = "../BankDashboard.html";
  } else {
    // alert("Password is worng");
    console.log("You are invalid user");
  }
});
