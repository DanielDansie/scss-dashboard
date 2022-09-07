function theme(color) {
    document.getElementById("nav").style.borderColor = color;
    document.getElementById("content").style.borderColor = color;
    widgets = document.getElementsByTagName("figure");
    Array.from(widgets).forEach(element => {
        element.style.borderColor = color;
    });
    console.log(color);

}
