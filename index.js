function showPopupItem1() {
    let popup = document.getElementById("popup-project-item-1");
    popup.classList.replace("popup-invisible","popup-visible");
}
function closePopup() {
    let popup = document.getElementById("popup-project-item-1");
    popup.classList.replace("popup-visible","popup-invisible");
}