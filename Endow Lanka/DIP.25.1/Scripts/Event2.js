$(function(){
    //update the text content of the element with the id to click on it and the background change to yellow
    $('#dse').on('click',function(){
        $('#dse').css('background-color','yellow').text('You clicked on the paragraph');
    }); 
});

$('#Btn').on('click',function(){
    let username = $('#Username').val();

    let output = `<h2>Hello ${username}!!</h2>`;
    $('#greet').html(output);
});