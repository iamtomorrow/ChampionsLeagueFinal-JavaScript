
//

function showCreditContainer() {
    document.querySelector(".credits--container").style.opacity = '1';
}

setTimeout(showCreditContainer, 3000);

document.querySelector(".close-button").addEventListener("click", () => {
    document.querySelector(".credits--container").style.display = 'none';
});
document.querySelector(".follow-button").addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/desktechnologies/";
});
