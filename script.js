//takes input values from other function
//adds whether the size is going up or down and the amount added as wel as element
function changeSize(element, addPx, changePosition) {
  console.log("test")
  element = document.querySelector(element);
  let balloonVal = window.getComputedStyle(element).fontSize;
  let balloonSize = sizeCalc(balloonVal, "px");
//conditionals based on direction
  if (changePosition === "up") {
    balloonSize += addPx;
  } else balloonSize -= addPx;
//will check for the balloon size value  between 60 and 0
  if (balloonSize <= 60 && balloonSize > 0) {
    balloonVal = balloonSize + "px";
    element.style.fontSize = balloonVal;
  } else if (balloonSize === 0) {
    console.log("test")
    element.firstChild.nodeValue = "Done";
    document.removeEventListener("keydown", balloonEvent, true);
    } else boom(element);
}
//function that takes in the event keycode and determines
//whether to run either up or down
function balloonEvent(event) {
  switch (event.keyCode) {
    case 68:
      changeSize(".balloon", 10, "down");
      console.log("test")
      break;
    case 73:
      changeSize(".balloon", 10, "up");
      console.log("test")
      break;
    default:
      return;
  }
}
//Conversion of data through string
function sizeCalc(unitConv, value) {
  console.log("test")
  return parseInt(unitConv.split(value)[0]);
  console.log(value)
}
//function putting down emoji for if values moves to or above 60
function boom(element) {
  console.log("test")
  element.firstChild.nodeValue = "💥";
  document.removeEventListener("keydown", balloonEvent, true);
}
//function call event listener
document.addEventListener("keydown", balloonEvent, true);
