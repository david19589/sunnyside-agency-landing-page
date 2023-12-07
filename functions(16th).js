const options = document.getElementById("options");
const smallwindow = document.getElementById("smallwindow");

options.addEventListener("click", () => {
    if (smallwindow.classList != ("smallwindow selected")){
        smallwindow.classList.remove("selected")
        smallwindow.classList.add("selected");
        smallwindow.style.display = "block"
    } else {
        smallwindow.classList.remove("selected");
        smallwindow.style.display = "none"
    }
});