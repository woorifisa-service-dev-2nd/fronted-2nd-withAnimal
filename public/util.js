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