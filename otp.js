document.querySelector("button").addEventListener("click", otpCheck)

  function otpCheck(event) {
    event.preventDefault()
    let otp = document.querySelector("#promo").value;
    if (otp.length == 4) {
      alert("login Seccessfully😊 you can visit inside ");
      window.location.href = "index.html";
    } else {
      alert("Please enter Valid OTP!");
    }
  }