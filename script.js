$(document).ready(function(){
    
    $('#addItemButton').click(function(){
        var newItem = $('#newItem').val();
        if(newItem) {
            $('#itemList').append('<li>' + newItem + '</li>');
            $('#newItem').val(''); 
        }
    });

    
    $('#newItem').keypress(function(event){
        if(event.which == 13) {
            $('#addItemButton').click();
        }
    });
});