var GET_PARAM = function (name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};

$(document).ready(function () {

  var cart = sessionStorage.getItem("cart")
  if (cart == null) {
    cart = []
  } else {
    cart = JSON.parse(cart)
  }

  $(".btn").click(function () {

    var found = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId == GET_PARAM("product_id")) {
        cart[i].quantity += 1
        found = true
      };
    }

    if (found == false) {
      var cardItem = {
        "productId": GET_PARAM("product_id"),
        "quantity": 1
      }
      cart.push(cardItem)
    }

    var card_str = JSON.stringify(cart);
    sessionStorage.setItem("cart", card_str);

  })
  og(catalog[GET_PARAM("product_id")].name);

  $(".title").html(catalog[GET_PARAM("product_id")].name)
  $(".price").html("Prix :" + catalog[GET_PARAM("product_id")].price + "€")
  $(".description").html(catalog[GET_PARAM("product_id")].description)

})




