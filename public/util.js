/**
 *
 * @param {String} method HTTP Method
 * @param {Object} body HTTP Method의 body
 * @returns option객체
 */
// eslint-disable-next-line import/prefer-default-export
export const makeOptions = (method, body) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };
};
