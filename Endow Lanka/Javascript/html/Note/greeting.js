document.querySelector('#btn_Greet').addEventListener('click',function(){
    let username=document.querySelector('#usr').value;
    let city=document.querySelector('#City').value;
    let output=`<h2>hello ${username} from ${city}</h2>` 

});