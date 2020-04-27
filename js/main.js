$(function(){

    $('.dishes__list li div').click(function() {
        $('.dishes__list li div').removeClass('dishes__active');
        $('.process__items').css('display', 'none');

        let index = $(this).parent().index();
        $(this).addClass('dishes__active');
        $('.process-content .process__items').eq(index).css('display', 'block');
      });

      $('.menu__btn').on('click', function(){
          console.log("робит");
        $('.menu__list').slideToggle();
    });
});