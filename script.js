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
    // $(function () {
    //     $(".mega-dropdown.dropdown").hover(
    //         function () {
    //             $('.dropdown-menu', this).stop(true, true).fadeIn("slow");
    //             $(this).toggleClass('open');
    //             $('b', this).toggleClass("caret caret-up");
    //         },
    //         function () {
    //             $('.dropdown-menu', this).stop(true, true).fadeOut("slow");
    //             $(this).toggleClass('open');
    //             $('b', this).toggleClass("caret caret-up");
    //         });
    // });
});