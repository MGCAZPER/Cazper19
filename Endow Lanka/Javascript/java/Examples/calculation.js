// input numbers from user

let n1 = prompt('Enter The first number: ');
let n2 = prompt('Enter the second number: ');

// calculation

let add = n1*1 + n2*1;
let mul = n1 * n2;
let diffrence = n1 - n2;

let output = `
    <h1> Calculation Results </h1>
    <br> The addition: ${add} 
    <br> The multiplication: ${mul} 
    <br> The diffrence: ${diffrence} 
`;
document.writeln(output);