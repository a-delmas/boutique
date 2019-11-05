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
        var inputquantity = $('<input type="number" value="'+cart[i].quantity+'" min="0" max="'+catalog[cart[i].productId].quantity+'" step="1" class="w-50"  id="qte-' + cart[i].productId + '" data-unit-price="' + catalog[cart[i].productId].price + '">')
        quantity.append(inputquantity)
        rowGutter.append(quantity)

        var unitprice = $('<div class="col-2 d-flex align-items-center pl-2">')
        rowGutter.append(unitprice)
        unitprice.html(catalog[cart[i].productId].price + " €")

        var total = $('<div class="col-2 d-flex align-items-center pl-4" id="total-' + cart[i].productId + '">')
        rowGutter.append(total)
        total.html(catalog[cart[i].productId].price * inputquantity.val() + " €")

        var delline = $('<div class="col-2 d-flex align-items-center pl-4">')
        var deletea = $('<a href="#" class="btn btn-outline-info justify-content-center" id="delete'+ cart[i].productId +'">')
        deletea.html("Supp")
        delline.append(deletea)
        rowGutter.append(delline)

        $('a[id*="delete"]').click(function () {
            $('#mainDiv' + $(this).attr("id").replace("delete", "")).remove()
        })

        inputquantity.change(function () {
            var newQty = parseInt($(this).val())
            var inputId = $(this).attr("id")
            var totalId = inputId.replace("qte", "total")
            var priceUnit = catalog[cart[i].productId].price

            var newTotal = newQty * priceUnit

            $("#" + totalId).html(newTotal + " €")

            updatetotal()

        })

    }
    var totalCart = $('<div class="col-12">')
    totalCart.html("Panier")
    $('.total').append(totalCart)

    var totalHorsTaxe = $('<div class="col-12" id="totalHT">')
    // totalHorsTaxe.html("Total H.T : " +  + " €")
    $('.total').append(totalHorsTaxe)
    
    var TVA = $('<div class="col-12" id="TVA">')
    TVA.html("dont T.V.A : 20%")
    $('.total').append(TVA)

    var totalTTC = $('<div class="col-12 totTTC" id="totalTTC">')
    // totalTTC.html("Total à payer : " +  + " €")
    $('.total').append(totalTTC)

    updatetotal()
})


function updatetotal(){
    var newTotalHT = 0
    var newTotalTTC = 0
    $('div[id*="total-"]').each(function () { 
        newTotalHT += parseInt($(this).text())
        $("#totalHT").html("Total H.T : " + newTotalHT + " €")
        newTotalTTC += parseInt($(this).text())
        calculTTC = newTotalTTC * 1.2
        $("#totalTTC").html("Total à payer : " + calculTTC.toFixed(2) + " €")
    })
}
