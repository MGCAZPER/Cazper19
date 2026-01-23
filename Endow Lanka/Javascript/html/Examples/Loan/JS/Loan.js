

document.querySelector('#gen').addEventListener('click',function(){
    let loan=document.querySelector('#LA').value;
    let time=document.querySelector('#LD').value;
    let intrest=document.querySelector('#IR').value;

    let installment = (loan*1+loan*intrest*time) / 100;

    let output = `<p>
        The installment on loan amount is(LKR):<br><b>${installment.toFixed(2)}</b>
        </p>`;
    document.querySelector('#result').innerHTML = output;
});