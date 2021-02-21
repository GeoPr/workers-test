/**
 *
 * @param {number} length
 */

export const getFibArray = length => {
  const result = [0, 1];

  for (let i = 1; i < length - 1; i++) {
    result.push(result[i] + result[i - 1]);
  }

  return result;
};

/**
 *
 * @param {number} n
 */

export const getFibNumber = n => {
  return n <= 1 ? n : getFibNumber(n - 1) + getFibNumber(n - 2);
};
