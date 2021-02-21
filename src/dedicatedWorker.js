import { getFibArray, getFibNumber } from './helpers.js';

self.onmessage = e => {
  const { value, type } = e.data;
  let result = getFibArray(value);

  if (type === 'one') {
    result = getFibNumber(value - 1);
  }

  postMessage(result);
};

// or just onmessage (without self)
