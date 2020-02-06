$(document).ready(function(){
    var menU = $('.topMenu').hover();
    var fullMenu = $('.content').hover();
    var i, cnt;

    for (i = 0; i < menU.length; i++) {
        menU[i].addEventListener("mouseover", function() {
            this.classList.toggle("active");
            cnt = this.nextElementSibling;
            if (cnt.style.display === "block") {
                cnt.style.display = "none";
            }else{
                cnt.style.display = "block";
            }

        });
        fullMenu[i].addEventListener("mouseleave", function(){
            cnt.style.display = "none";
        });
            //cnt.style.display = "none";
    }
});