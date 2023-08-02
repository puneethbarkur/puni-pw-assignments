let username = "admin";
let password = "12345";

function verify(u, p){
   if(u=="admin" && p=="12345"){
       console.log("Login Successful");
   }
   else{
       console.log("invalid credentials");
   }
}

verify(username, password);