const arr = [1,2,999,56,"Mithun",1234,"pw"];
let res = [];

for(let i=0; i<arr.length; i++){
   if(typeof arr[i] == "string"){
     res.push(arr[i]);
   }
}

console.log(res);
console.log(`Found the first string: ${res[0]}`);