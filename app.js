"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {  
        e.preventDefault(); 
        if (!IsNaN($('.input').val)) {
            !$.trim($("#inputme").val()) 
            $('.input').val();        
            let a = b => { 
                for (let i = 1; i <= b; i++) { $('.minibox').append(`<h2>${b}</h2>`); } 
            } 
            let v = f =>  ? ••• : $('.minibox').append(`<h2>${f}</h2>`);  
            v($('input').val()); 
        } 
        ///// inputu təmizləmək 
        $('input').val("");
    }) 
});