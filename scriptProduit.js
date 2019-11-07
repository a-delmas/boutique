var GET_PARAM = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  };

  $(document).ready(function () {
      var cart = []
      $(".btn").click(function(){
          var cardItem = {
            "productId" : GET_PARAM("product_id"),
            "quantity" : 0
        }
        cart.push(cardItem)
        if (cardItem.productId == cardItem.productId) {
            cardItem.quantity += 1
        }
        var card_str = JSON.stringify(cart);
        sessionStorage.setItem("cart",card_str);

     
      })
    // var btn = (".btn-addPanier")  

    // $(btn).click(function () {
    //     var cart
    // })   

    // console.log(catalog[GET_PARAM("product_id")].name);

    $(".title").html(catalog[GET_PARAM("product_id")].name)
    $(".price").html("Prix :"+ catalog[GET_PARAM("product_id")].price+"€")
    $(".description").html(catalog[GET_PARAM("product_id")].description)

})




