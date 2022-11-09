function Okebro(id, src) {
  const count = document.getElementById("basket").children.length - 1;
  const image = document.createElement("img");
  image.setAttribute("id", count);
  image.setAttribute("onclick", "hapusGambar(id)");
  image.src = `${src}`;
  document.getElementById("basket").appendChild(image);
  document.getElementById("count").innerHTML = count;
  }

function hapusGambar(id) {
  const hapus = document.getElementById(id);
  hapus.remove();
  const count = document.getElementById("basket").children.length - 1;
  document.getElementById("count").innerHTML = count;
}
  
function Gantiwarnatext() {
  var inputColor = prompt("Input Warna");
  document.getElementById("Okeh").style.color = inputColor;
}

function Gantiwarnabackground() {
  var inputColor = prompt("Input Warna");
  document.body.setAttribute("style", "background-color: " + inputColor);
}
