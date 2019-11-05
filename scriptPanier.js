$(document).ready(function () {
    // var card = $('<div class="col-12 card">')
    // $(".cardline").append(card)

    // var row = $('<div class="row no gutters">')
    // card.append(row)

    var cart = [
        {
            productId: 1,
            quantity: 1,
        },
        {
            productId: 42,
            quantity: 2,
        },
        {
            productId: 5,
            quantity: 7,
        },
    ]

    var cardline = $(".cardline")

    for (let i = 0; i < cart.length; i++) {
        var rowGutter = $('<div class="row no-gutters" id="mainDiv' + cart[i].productId + '">')
        cardline.append(rowGutter)
        console.log(inputquantity);


        var cardlineimg = $('<div class="col-md-2">')
        rowGutter.append(cardlineimg)

        var img = $('<img src="images/Yann.png" class="card-img p-2" alt="...">')
        cardlineimg.append(img)

        var descriptionCart = $('<h5 class="col-2 card-title d-flex align-items-center">')
        rowGutter.append(descriptionCart)
        descriptionCart.html(catalog[cart[i].productId].name)


        var quantity = $('<div class="col-2 d-flex align-items-center justify-content-center">')
        var inputquantity = $('<input type="number" value="0" min="0" max="1000" step="1" class="w-50"  id="qte-' + cart[i].productId + '" data-unit-price="' + catalog[cart[i].productId].price + '">')
        quantity.append(inputquantity)
        rowGutter.append(quantity)

        var unitprice = $('<div class="col-2 d-flex align-items-center pl-2">')
        rowGutter.append(unitprice)
        unitprice.html(catalog[cart[i].productId].price)

        var total = $('<div class="col-2 d-flex align-items-center pl-4" id="total-' + cart[i].productId + '">')
        rowGutter.append(total)

        var delline = $('<div class="col-2 d-flex align-items-center pl-4">')
        var deletea = $('<a href="#" class="btn btn-outline-info justify-content-center">')
        deletea.html("Supp")
        delline.append(deletea)
        rowGutter.append(delline)

        inputquantity.change(function () {
            var newQty = parseInt($(this).val())
            var inputId = $(this).attr("id")
            var totalId = inputId.replace("qte","total")
            var priceUnit = catalog[cart[i].productId].price
                        
            var newTotal = newQty * priceUnit

            $("#"+totalId).html(newTotal)
            
            
        })
    }





    // console.log(cart);

})
