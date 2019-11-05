$(document).ready(function () {
    plop()
})

function plop(product) {
    for (let i = 0; i < catalog.length; i++) {
        var catalogCard = $('<div class="col-12 col-md-6 col-lg-4">')
        $(".catalogCard").append(catalogCard)
        var card = $(' <div class="card h-100 m-2"><a href="ficheproduit.html?product_id=""><h5 class="card-title text-secondary">' + catalog[i].name +
            '</h5><img src="'+catalog[i].thumb+
            '" class="card-img-top img-thumbnail rounded" alt="..."><divclass="card-body"><div class="row"><div class="col-12"><p class="text-secondary">Prix : '+catalog[i].price+
            '€</p><p class="card-text text-secondary mb-3">'+catalog[i].description+
            '</p></div><div class="col-12 "><button class="btn btn-outline-secondary" type="submit">Ajouter au Panier</button></div></div></div></a></div>')
        catalogCard.append(card)
    }

}


