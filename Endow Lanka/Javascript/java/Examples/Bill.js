let name = prompt('Enter Your name: ');
let unit = prompt('Enter The amount of units: ');
let rate = 0;
let amount = 0;

if(unit >= 120){amount = unit*45;}
else if(unit >= 70){amount = unit*35;}
else if(unit >= 40){amount = unit*24;}

let output =`<h1>Bill For ${name}</h1><br></br>
            <p>Units Consumed: ${unit} </p>
            <p>Amount Payable: ${amount} </p>`;
document.writeln(output);
alert(console.error());
