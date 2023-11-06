function handleClick(event) {
  console.log('button clicked');
  console.log('Event', event);
  console.log('Event.Target: ', event.target);
}

const click = document.querySelector('.click-button');
click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('Event', event);
  console.log('Event.Target: ', event.target);
}

const hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('Event', event);
  console.log('Event.Target: ', event.target);
}

const double = document.querySelector('.double-click-button');
double.addEventListener('dblclick', handleDoubleClick);
