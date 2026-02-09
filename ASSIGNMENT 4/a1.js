function swapTheme() {
    const appDiv = document.getElementById("app");
    const btn = document.getElementById("swap");

    if (appDiv.className === "day") {
        appDiv.className = "night";
        btn.className = "button_night";
    } else {
        appDiv.className = "day";
        btn.className = "button_day";
    }
}