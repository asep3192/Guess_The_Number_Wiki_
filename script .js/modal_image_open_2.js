// Get the modal
var modal2 = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg01");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span01.onclick = function() {
  modal2.style.display = "none";
}