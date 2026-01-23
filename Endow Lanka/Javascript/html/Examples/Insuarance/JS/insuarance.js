document.querySelector('#cong').addEventListener('click',function(){
    let V_no=document.querySelector('#VN').value;
let type=document.querySelector('#Type').value;
let reg=document.querySelector('#YOM').value;
let V_value=document.querySelector('#VV').value;
let aging = 0.00;
let ins=0.00

if (reg=='Before 2000'){
    aging=0.04;
}else if(reg=='2000 - 2015'||reg =='2015 - 2020'){
    aging=0.06;
}else if(reg=='2020 - Now'){aging=0.08;}


if(type=='Motor Bike'|| type=='Tricycle'){
    ins=0.13;
}
else if(type=='Light'){
    ins=0.18;
}else if(type=='Heavy'){
    ins=0.22;
}
let Insuarance = 0.00;
Insuarance =  V_value*ins+V_value*aging;

let out='<p style="font-size:20px; color:blue;"> Insuarance Installment : '+Insuarance.toFixed(2)+'</p>';});
document.querySelector('#output').innerHTML=out;