$(document).ready(function () {
    var i = Math.floor(Math.random() * 100)
    var j = Math.floor(Math.random() * 100)
    var k = Math.floor(Math.random() * 100)

    plop(i, catalog[i]);
    plop(j, catalog[j]);
    plop(k, catalog[k]);
})

function plop(idx, product) {
    var topVente = $('<div class="col-12 col-md-6 col-lg-4">')
    $(".top-vente").append(topVente)
    var addcard = $('<div class="card h-100">')
    topVente.append(addcard)
    addcard.append($('<h5 class="card-title">' + product.name + '</h5>'))
    addcard.append($('<img src="' + product.thumb + '" class="card-img-top img-thumbnail" alt="...">'))
    var addcardbody = $('<div class="card-body">')
    addcard.append($(addcardbody))
    addcardbody.append($('<div class="row">Prix : ' + product.price +
        '<div class="col-12"><p class="card-text mb-3">' + product.description +
        '</p></div><div class="col-12"><a href="ficheproduit.html?product_id=' + idx + '"class="btn btn-outline-info">Fiche Produit</a></div></div>'))

}
