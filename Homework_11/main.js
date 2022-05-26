let darkmode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkmodetoggle");

const enableDarkMode = () =>{
    // 1. add the class darkmode to the body
    document.body.classList.add("darkmode");
    // 2. update darkmode in the localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () =>{
    // 1. remove the class darkmode to the body
    document.body.classList.remove("darkmode");
    // 2. update darkMode in the localStorage
    localStorage.setItem("darkMode", null);
};

if(darkmode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () =>{
    darkmode = localStorage.getItem("darkMode");
    if(darkmode !== "enabled"){
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});