const headerBtn = document.querySelector('.header__btn');
const headerForm = document.querySelector('.header__form');
const headerClose = document.querySelector('.header__close');

headerBtn.addEventListener('click', () => {
  headerForm.classList.add('header__form-active');
});

headerClose.addEventListener('click', () => {
  headerForm.classList.remove('header__form-active');
});

$(".header__close").click(function(event) {
  event.preventDefault();
});

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  allowTouchMove: true,
  loop: true,
});

document.querySelectorAll('.work__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.work__btn').forEach(function (btn) {
      btn.classList.remove('work__btn--default')
    });
    e.currentTarget.classList.add('work__btn--default');
    document.querySelectorAll('.tab-content').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tab-content--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');
  });
});

const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
});

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    active: false,
  });
});

