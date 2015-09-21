/**
 * Created by bmannava on 9/21/15.
 */
$('body').on('click', function (e) {
    //did not click a popover toggle or popover
    if ($(e.target).data('toggle') !== 'popover'
        && $(e.target).parents('.popover.in').length === 0) {
        var flag = $('.lblWd')[0] === $(e.target)[0]  ||  $('.input-group')[0] === $(e.target) || $('.input-group-addon')[0] ===$(e.target)[0] ||  $('.fa-calendar')[0] == $(e.target)[0];
        if($('.popover')[0] && $('.popover')[0].className &&  $('.popover')[0].className.indexOf('in-remove') === -1 && flag){
            $('.popover').show();

        }else{
            $('.popover').hide();
        }

    }
});