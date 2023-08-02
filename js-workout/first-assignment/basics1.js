let totalValue = 2000;
let discountPercentage = 20;

function finalPrice(t, d){
   console.log(`The final price after discount is: Rs.${t-(t*(d/100))}`);
}

finalPrice(totalValue, discountPercentage);