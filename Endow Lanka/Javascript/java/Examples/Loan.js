let LoanAmount = prompt("Enter the loan amount: ");
let InterestRate = prompt("Enter the interest rate: ");
let durationMonths = prompt("Enter the duration in months: ");

let intrest = (LoanAmount*1 + LoanAmount*1 * InterestRate) / durationMonths;
let totalPayment = LoanAmount + intrest;

let o1 = `

    <h1> Loan Calculation Results </h1>
    <br> Monthly Interest: ${intrest}
    <br> Total Payment: ${totalPayment}

`;
document.writeln(o1);
console.error("This is an error message.");