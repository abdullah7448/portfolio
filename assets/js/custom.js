const mmenu=document.getElementById('icon-2');
const mob_nav= document.getElementById('mob-nav');
function handleMobileMenu_toggle(e){
    e.stopPropagation()
    mob_nav.classList.toggle("mob-nav-toggle")

}
function handleMobileMenu_Remove(e){
    e.stopPropagation()
    mob_nav.classList.remove("mob-nav-toggle")
}
mmenu.addEventListener("click", handleMobileMenu_toggle);
document.addEventListener("click",handleMobileMenu_Remove);