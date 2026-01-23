// h1 heading to a document Object
// model when user moves mouse pointer over h1 heading.Change the text
//color to red
document.querySelector('h1').addEventListener('mouseover',function(){
    document.querySelector('h1').innerText="Document Object Model";
    document.querySelector('h1').style.color="red"
});
document.querySelector('h1').addEventListener('mouseleave',function(){
    document.querySelector('h1').innerText="DOM";
    document.querySelector('h1').style.color="Black"
});

let paras=document.querySelectorAll('p');
for(i=0;i<paras.length;i++){
    paras[i].addEventListener('click',function(){
        this.style.fontSize="25px"
    });
}
document.querySelector('p').addEventListener('mouseover',function(){
    document.querySelector('p').style.fontSize="70px";

});