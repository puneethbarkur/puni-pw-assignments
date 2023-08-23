const products = [{name: "laptop", price: 120000},
{name: "mobile", price: 70000},
{name: "laptop bag", price: 20000},
{name: "watch", price: 20000},
{name: "mobile charger", price: 1500}];


let highest = 0;
let highest_product;

let lowest = Infinity;
let lowest_product;

function pu(arr){
   arr.forEach((ele)=>{
     if(ele.price>highest){
        highest = ele.price;
        highest_product = ele.name;
     }
     if(ele.price<lowest){
       lowest = ele.price;
       lowest_product = ele.name;
     }
   });
  console.log(`the product with maximum amount is ${highest_product} with the price of ${highest}`); 
  console.log(`the product with minimum amount is ${lowest_product} with the price of ${lowest}`);
}

pu(products);