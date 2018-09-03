const inputForm = document.getElementById('inputForm');
inputForm.addEventListener('submit', handleSubmit);

const list = document.getElementById('outputList');

function handleSubmit(event) {
  event.preventDefault();
  let value = document.forms['inputForm']['task'].value;
  let listItem = document.createElement('li');
  listItem.innerText = value;

  list.appendChild(listItem);
  value = '';
}
