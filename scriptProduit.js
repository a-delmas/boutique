var GET_PARAM = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};


$(document).ready(function () {
    console.log(GET_PARAM("product_id"));
    $(".title").html(catalog[GET_PARAM("product_id")].name)
    $(".price").html("Prix :"+ catalog[GET_PARAM("product_id")].price+"€")
    $(".description").html(catalog[GET_PARAM("product_id")].description)
    
})


