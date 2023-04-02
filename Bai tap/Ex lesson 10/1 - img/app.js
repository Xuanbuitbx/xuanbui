function updateImage() {
    var url = document.getElementById("url-input").value;
    var width = document.getElementById("width-input").value;
    var height = document.getElementById("height-input").value;
    var borderRadius = document.getElementById("border-radius-input").value;
    var alt = document.getElementById("alt-input").value;
    
    var img = document.getElementById("image");
    img.src = url;
    img.width = width;
    img.height = height;
    img.style.borderRadius = borderRadius + "px";
    img.alt = alt;
}