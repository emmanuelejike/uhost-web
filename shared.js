alert('Hello this  web-page is secured with google for any lose click ok to comfirm ');
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal-action--negative");
var selectPlanButton = document.querySelectorAll(".choose-a-plan");


for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener("click", function(){
        modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

    backdrop.addEventListener("click", closeModal);

    modalNoButton.addEventListener("click", closeModal);

    function closeModal(){
        backdrop.style.display = "none";
        modal.style.display = "none";
    }