console.log("script file")
//var age=10; //initialization and assignation
// let userName="mike";
// const taxes = 11.5;
// const url="http://www.thisisawebpage";

// console.log(age,username,url) //displaying the age, username and url

// userName="Edward"; //changing the username value
// taxes=12; //changing the taxes value
// console.log(username,url) //displaying the username and url


let numberChildren = "0";
let partnersName = "Teddy";
let geographicLocation = "San Diego";
let jobTitle = "Medic"

//concatenation use ""
console.log("I have " + numberChildren + " children" ,"My partners name is " + partnersName, "I live in " + geographicLocation, "My job title is " + jobTitle)

//template string use ``
document.write(` <p> You will have ${numberChildren} children in ${geographicLocation}, and married to ${partnersName} and you will be working as a ${jobTitle}</p>`)