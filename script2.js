
let userName=prompt("Enter your name");
let email=prompt("Enter your password");
let passWord= prompt("Enter your password");
let age = prompt("Enter your age");
let country= prompt("Enter your country");
let salary=prompt("Enter your salary");

console.log(userName,email,salary);

// console.log("My Name is " + userName + "My email is " + email + "I make" + salary + " in a month");

document.write(`
<p> User: ${userName} </p>
<p>Email: ${email}</p>
<p> Salary: ${salary}</p>
`);

// creating function

// funtion declaration
function greeting(){
    // body of funtion
    console.log("Hello");
    alert("Hello");
    document.write("hello");

}

function sum(){
    return 10+10;
}

console.log(sum());






console.log(userName,email,salary);