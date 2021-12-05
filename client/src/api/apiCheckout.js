// returns the checkout page
function checkout(name, price) {
  var path = "/api/checkout/";
  let data = {name: name, price: price}
  return fetch(path, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  }).then((response) => {
      console.log(response);
      console.log(response.data.url);
      window.location.href = response.data.url;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default {
  checkout,
};