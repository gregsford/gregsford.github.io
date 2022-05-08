const modalBtn1 = document.querySelector('.modal-btn1');
const modalBtn2 = document.querySelector('.modal-btn2');
const modalBtn3 = document.querySelector('.modal-btn3');
const modalBg1 = document.querySelector('.modal-bg1');
const modalBg2 = document.querySelector('.modal-bg2');
const modalBg3 = document.querySelector('.modal-bg3');
const modalClose1 = document.querySelector('.modal-close1');
const modalClose2 = document.querySelector('.modal-close2');
const modalClose3 = document.querySelector('.modal-close3');

modalBtn1.addEventListener('click', () => {
  modalBg1.classList.add('bg-active');
});

modalClose1.addEventListener('click', () => {
  modalBg1.classList.remove('bg-active');
});

modalBtn2.addEventListener('click', () => {
  modalBg2.classList.add('bg-active');
});

modalClose2.addEventListener('click', () => {
  modalBg2.classList.remove('bg-active');
});

modalBtn3.addEventListener('click', () => {
  modalBg3.classList.add('bg-active');
});

modalClose3.addEventListener('click', () => {
  modalBg3.classList.remove('bg-active');
});