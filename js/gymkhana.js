var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    var element = document.getElementById('footer');
    var elementtwo = document.getElementById('footerp');
    element.classList.remove('moveup');
    // elementtwo.classList.remove('displayp');
  } else {
    var element = document.getElementById('footer');
    var elementtwo = document.getElementById('footerp');
    element.classList.add('moveup');
    // elementtwo.classList.add('displayp');
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
