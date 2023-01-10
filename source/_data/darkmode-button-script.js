const updateDarkmodeButtonLabel = () => {
    if (volantis.dark.mode == "dark") {
        // $(".toggle-mode-btn").innerHTML = "<i class=\"fas fa-sun fa-fw\"></i>浅色模式";
        document.getElementsByClassName("toggle-mode-btn")[0].innerHTML = "<i class=\"fas fa-sun fa-fw\"></i>浅色模式";
        document.getElementsByClassName("toggle-mode-btn")[1].innerHTML = "<i class=\"fas fa-sun fa-fw\"></i>浅色模式";
    } else {
        // $(".toggle-mode-btn").innerHTML = "<i class=\"fas fa-moon fa-fw\"></i>深色模式";
        document.getElementsByClassName("toggle-mode-btn")[0].innerHTML = "<i class=\"fas fa-moon fa-fw\"></i>深色模式";
        document.getElementsByClassName("toggle-mode-btn")[1].innerHTML = "<i class=\"fas fa-moon fa-fw\"></i>深色模式";
    }
}

window.addEventListener('load', () => {
    updateDarkmodeButtonLabel();
    volantis.dark.push(() => {
        updateDarkmodeButtonLabel();
    })
}, { once: true })