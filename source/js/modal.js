var modal = document.querySelector('#modal-add');
var modalShow = document.querySelector('.modal');

modal.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalShow.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalShow.classList.remove("modal-show");
  }
});
