const userName = "John Doe"; 
const userAge = 25; 
const isStudent = true; 


console.log(`Name: ${userName} (Type: ${typeof userName})`);
console.log(`Age: ${userAge} (Type: ${typeof userAge})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);


function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
            return;
    }

    alert(`Result: ${result}`);
}

calculator(); 

function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript world.`;
}

const Name = prompt("Please enter your name:");

if (Name) {
    const greetingMessage = greetUser(Name);
    document.getElementById("dynamic-content").innerHTML = `<p>${greetingMessage}</p>`;
} else {

    document.getElementById("dynamic-content").innerHTML = `<p>You didn't enter a name. Please refresh the page and try again.</p>`;
}


const userAgeInput = parseInt(prompt("Enter your age:"));
if (userAgeInput >= 18) {
    document.getElementById("dynamic-content").innerHTML += `<p>You are eligible to vote!</p>`;
} else {
    document.getElementById("dynamic-content").innerHTML += `<p>You are not eligible to vote.</p>`;
}

const numberList = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}
document.getElementById("dynamic-content").appendChild(numberList);

document.querySelector("h1").textContent = "JavaScript in Action!";

const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);