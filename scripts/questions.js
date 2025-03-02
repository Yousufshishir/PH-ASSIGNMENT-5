document.getElementById("back-to-desk-button").style.display="none"
document.getElementById("show-hero").style.display="none"

document.getElementById("question-tasks").addEventListener("click",function(){

document.getElementById("nav-right-hide").style.display="none"
document.getElementById("back-to-desk-button").style.display="block"


// hiding hero
document.getElementById("hide-hero").style.display="none"
document.getElementById("show-hero").style.display="block"


})


document.getElementById("back-to-desk-button").addEventListener("click",function(){

window.location.href="./index.html"

})