var modal = document.querySelectorAll('.modal-add');
var modalShow = document.querySelector('.modal');

for (var i = 0 ; i < modal.length; i++) {
  modal[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modalShow.classList.add("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalShow.classList.remove("modal-show");
  }
});
