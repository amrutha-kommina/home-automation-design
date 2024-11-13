var slider = document.querySelector(".slider");
var thumb = document.getElementById("thumb");
var isDragging = false;
thumb.addEventListener("mousedown", startDragging);
thumb.addEventListener("touchmove", startDragging);

function startDragging(event) {
  isDragging = true;
  changeThumbWidth(event);
  event.preventDefault();
}

document.addEventListener("mousemove", changeThumbWidth);
document.addEventListener("touchmove", changeThumbWidth);

function changeThumbWidth(event) {
  if (isDragging) {
    var sliderRect = slider.getBoundingClientRect();
    var positionX = event.clientX - sliderRect.left;
    var maxPositionX = 400 - 10;
    positionX = Math.min(Math.max(positionX, 0), maxPositionX);
    thumb.style.width = positionX + "px";
    // if (positionX / maxPositionX <= 0.25) {
    //   thumb.querySelector("span").innerHTML = "brightness_low";
    // } else if (positionX / maxPositionX <= 0.7) {
    //   thumb.querySelector("span").innerHTML = "brightness_medium";
    // } else {
    //   thumb.querySelector("span").innerHTML = "brightness_high";
    // }
    document.body.style.cursor = "grabbing";
    thumb.style.cursor = "grabbing";
  }
}

document.addEventListener("mouseup", stopDragging);
document.addEventListener("touchend", stopDragging);
function stopDragging(event) {
  isDragging = false;
  document.body.style.cursor = "auto";
  thumb.style.cursor = "grab";
}