jQuery('document').ready(function($){
    let menuBtn = $('.button');
    let menu = $('.nav ul');
    let icon = $('.button i');

    menuBtn.click(function(){
    if(menu.hasClass('show')){
        menu.removeClass('show');
        icon.removeClass('fa-solid fa-angle-up')
        icon.addClass('fa-solid fa-angle-down')
    }
    else{
        menu.addClass('show');
        icon.removeClass('fa-solid fa-angle-down')
        icon.addClass('fa-solid fa-angle-up')
    }

    });

});



