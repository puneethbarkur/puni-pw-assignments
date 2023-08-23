function generateOtp(){
  let a = String(Math.floor(Math.random()*10));
  let b = String(Math.floor(Math.random()*10));
  let c = String(Math.floor(Math.random()*10));
  let d = String(Math.floor(Math.random()*10));

  let res = Number(a+b+c+d);
  return res;
}

console.log(`here is your OTP: ${generateOtp()}`);