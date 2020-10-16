const amOnline = document.querySelector('.online')
let likes = 0;

function delayAnimation () {
    $(amOnline).remove();
    $('#avatar-container').prepend(amOnline);
}

setInterval(delayAnimation, 5000);

$('.far.fa-heart').click(function() {
    likes++;
    $('.likes').html(likes);
    $(this).addClass('liked')
})