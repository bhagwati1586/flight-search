// Code goes here

$(document).ready(function () {
    $(document).on('click', '.tripType .btn', function () {
        var _ = $(this);
        if (_.hasClass('active')) {
            // _.removeClass('active');
        }
        else {
            _.siblings().removeClass('active');
            _.addClass('active');
        }
        //console.log(_);
    });
    $(document).on('click', '#source, #destination', function () {
        var _ = $(this);
        $('.secondary').slideDown('slow');
        $('.closeIt').slideDown('slow');
        //console.log(_);
    });
    $(document).on('click', '.closeIt', function () {
        var _ = $(this);
        $('.secondary').slideUp('slow');
        $('.closeIt').slideUp('slow');
        //console.log(_);
    });
});