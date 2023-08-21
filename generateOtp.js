// started working on generate otp function
function generateOtp() {
  var digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}
// generating otp 5 times to check
console.log(generateOtp());
console.log(generateOtp());
console.log(generateOtp());
console.log(generateOtp());
console.log(generateOtp());