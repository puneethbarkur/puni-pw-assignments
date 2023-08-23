const students = [
    {name: "Mithun", marks: 95},
    {name: "Prabir", marks: 75},
    {name: "Alka", marks: 92},
    {name: "Shivam", marks: 70},
    {name: "Farman", marks: 99}
];

function checkResults(a){
    for(let i of a){
        if(i.marks>=90){
           console.log(`Congratulation ${i.name}!. You have cleared the exam`);
        }
        else{
            console.log(`Sorry!. You have not cleared the exam`);
        }
    }
}

checkResults(students);

