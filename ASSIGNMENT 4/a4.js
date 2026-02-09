const text = document.getElementById("text-container");

document.getElementById("colorchange").onclick = function () {
    const color = document.getElementById("colorbox").value;
    text.style.color = color;
};

document.getElementById("fontsize").oninput = function () {
    text.style.fontSize = this.value + "px";
};

document.getElementById("italic").onclick = function () {
    text.style.fontStyle =
        text.style.fontStyle === "italic" ? "normal" : "italic";
};


document.getElementById("underline").onclick = function () {
    text.style.textDecoration =
        text.style.textDecoration === "underline" ? "none" : "underline";
};

document.getElementById("bold").onclick = function () {
    text.style.fontWeight =
        text.style.fontWeight === "bold" ? "normal" : "bold";
};

document.getElementById("list").onchange = function () {
    text.style.fontFamily = this.value;
};

document.getElementById("getstyle").onclick = function () {
    const color = text.style.color || "black";
    const size = text.style.fontSize || "55px";
    const family = text.style.fontFamily || "sans-serif";
    const style = text.style.fontStyle || "normal";
    const weight = text.style.fontWeight || "normal";
    const deco = text.style.textDecoration || "none";

    const cssText =
        "color: " + color + "; " +
        "font-size: " + size + "; " +
        "font-family: " + family + "; " +
        "font-style: " + style + "; " +
        "font-weight: " + weight + "; " +
        "text-decoration: " + deco + ";";

    document.getElementById("css-props").textContent = cssText;
};