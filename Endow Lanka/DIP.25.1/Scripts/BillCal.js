$(function() 
{   $('#Summary').hide();
    $('#calculateBtn').on('click',function(){
        
        // Get input values
        let billtotal = $('#billamount').val()*1;
        let service = $('#serviceCharge').val()*1;
        let discount = $('#discount').val()*1;

        //calculate the net Total
        let netTotal =(billtotal + service);
        let finalTotal = netTotal - (netTotal * (discount / 100));
        //Display the result
        $('#netTotal').val(finalTotal.toFixed(2));
        $('#cName2').val($('#cname').val());
        let content=`
        <p>Customer Name: ${$('#cname').val()}</p>
        <p>Bill Amount: ${billtotal}</p>
        <p>Service Charge: ${service}</p>
        <p>Discount: ${discount}%</p>
        <p>Net Total: ${finalTotal.toFixed(2)}</p>
        <br><br>
        <p><a href="../DIP.25.1/Bill.html">Click To Generate the Bills again </p>
        <hr>`

        $('form').slideToggle();
        $('#Summary').append (content);
        $('#Summary').show();



    });


});