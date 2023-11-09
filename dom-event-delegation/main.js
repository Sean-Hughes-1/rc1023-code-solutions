const taskList = document.querySelector('.task-list');
taskList.addEventListener('click', function (e) {
  console.log('event target: ', e.target);
  console.log('event target name: ', e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    const taskItem = e.target.closest('.task-list-item');
    console.log('task clicked: ', taskItem);
    taskItem.remove();
  }
});
