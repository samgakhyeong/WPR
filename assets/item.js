let originalJson = null;

window.addEventListener("DOMContentLoaded", (e) => {
    originalJson = JSON.parse(window.localStorage.getItem("lastClickedItemData"));
    console.log(originalJson);
});