"use strict";

// const amOnline = document.querySelector('.online')
var likes = 0;
$('.far.fa-heart').click(function () {
  likes++;
  $('.likes').html(likes);
  $(this).addClass('liked');
});
$('.hire-btn').click(function () {
  window.location = 'mailto:nikomunx@gmail.com';
});
$('.resume-btn').click(function () {
  window.open('https://docs.google.com/document/d/1x3CnbxV-T2KKZvgtS8qpBe5kY-7eRBvAck1U1NgGSuk/edit?usp=sharing', '_blank');
});
$('.pd-btn').click(function () {
  window.open('https://petersondigital.co/', '_blank');
});
$('.git-fakecrews').click(function () {
  window.open('https://github.com/nikoneex/imposter-tracker-app', '_blank');
});
$('.link-fakecrews').click(function () {
  window.open('http://www.fakecrews.xyz', '_blank');
});
$('.git-library').click(function () {
  window.open('https://github.com/nikoneex/library-tracker-app', '_blank');
});
$('.git-rps').click(function () {
  window.open('https://github.com/nikoneex/rock-paper-scissors-app', '_blank');
});
$('[data-toggle="popover"]').popover();