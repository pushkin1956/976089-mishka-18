var navMenu=document.querySelector(".menu"),navBtn=document.querySelector(".menu__btn");navMenu.classList.remove("menu__no-js"),document.body.classList.remove("no-js"),navBtn.addEventListener("click",function(){navMenu.classList.toggle("menu__opened")});