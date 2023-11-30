const selectbox = document.getElementById("search");

selectbox.addEventListener("change", (event) => {
  const target = event.target.value;
  console.log(target);
});

// eslint-disable-next-line no-unused-vars
const makeOptions = (method, body) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };
};
