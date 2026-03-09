const prompt =require("prompt-sync")({sigint:true});
const age = parseInt(prompt("Enter your age:"));
if( age >= 18 ) {
    console.log("you are adult");
}else{
    console.log("you are a minor");
}
const number = parseInt(prompt("enter a number: "));
if(number % 2 ===0){
    console.log(`${number} is even`);
}else{
    console.log(`${number} is odd`);
}