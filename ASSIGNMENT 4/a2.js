function createDiv(width, height, text) {
    
    const newDiv = document.createElement("div");

    
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";

    
    newDiv.textContent = text;

   
    newDiv.style.border = "1px solid black";

    
    const container = document.getElementById("container");
    container.appendChild(newDiv);
}


createDiv(200, 100, "I am a dynamic div!");