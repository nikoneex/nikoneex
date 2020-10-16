"use strict";

var botui = new BotUI('my-botui-app');
var i = 0;
botui.message.add({
  delay: 1000,
  loading: true,
  type: 'html',
  content: '<span class="user">nikoneex$</span><br>Hello! My name is Niko Mungcal'
}).then(function () {
  botui.message.add({
    icon: 'arrowdown',
    loading: true,
    delay: 1000,
    type: 'html',
    content: '<span class="user">nikoneex$</span><br>Where would you like to go?<br>⬇️'
  });
}).then(showNav());

function showNav() {
  botui.action.button({
    autoHide: false,
    delay: 2000,
    action: [{
      icon: 'user',
      text: 'about me',
      value: 'about-me-container'
    }, {
      icon: 'check',
      text: 'skills',
      value: 'skills-container'
    }, {
      text: '</> projects',
      value: 'projects-container'
    }, {
      icon: 'at',
      text: 'contact',
      value: 'contact-container'
    }]
  }).then(function (res) {
    removeUserAction();
    console.log(res.value);
    navigateTo(res.value);
  }).then(i < 10 ? showNav : showNav);
}

function navigateTo(val) {
  var section = '#' + val;
  document.querySelector(section).scrollIntoView({
    behavior: 'smooth'
  });
}

function removeUserAction() {
  var parent = $('.human').parent().parent();
  $(parent).remove();
}