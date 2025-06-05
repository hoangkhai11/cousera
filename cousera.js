function update(previewPic) {
  console.log("Mouseover event triggered.");
  console.log("Image source:", previewPic.src);
  console.log("Image alt text:", previewPic.alt);

  let imageDiv = document.getElementById("image");


  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";


  imageDiv.innerHTML = previewPic.alt;
}

function undo() {
  console.log("Mouseout event triggered.");

  let imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "url('')";


  imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
