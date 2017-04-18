// Code goes here

$(document).ready(function(){
  $(document).on('click', '.tripType .btn', function(){
    var _ = $(this);
    if(_.hasClass('active')){
     // _.removeClass('active');
    }
    else{
      _.siblings().removeClass('active');
      _.addClass('active');
    }
    //console.log(_);
  });
});