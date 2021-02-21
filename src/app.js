const form = document.getElementById('form');
const result = document.getElementById('result');
const clearButton = document.getElementById('clear-button');

const dedicatedWorker = new Worker('./dedicatedWorker.js');

dedicatedWorker.onmessage = e => {
  const { data } = e;

  if (typeof data === 'number') {
    result.innerHTML = data;
    return;
  }

  result.innerHTML = `${data
    .map(num => `<div class="num">${num}</div>`)
    .join('')}
	`;
};

dedicatedWorker.onerror = ({ message }) => {
  console.log(message);
};

const onSubmit = e => {
  e.preventDefault();

  const { submitter } = e;
  const { type } = submitter.dataset;

  const { input } = e.target;
  const value = +input.value.trim();

  if (!Number.isNaN(value) && value > 0) {
    dedicatedWorker.postMessage({ value, type });

    input.value = '';
    input.focus();
  }
};

form.addEventListener('submit', onSubmit);
clearButton.addEventListener('click', () => (result.innerHTML = ''));
