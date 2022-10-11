const fetchPromise = fetch("http://localhost:8010/proxy/developer/banner.json");
fetchPromise
    .then((response) => response.json())
    .then(productData => {

    function randomProduct(offers)
    {
        let randomItemNumber = Math.floor(Math.random()*offers.length);
        let randomProduct = offers[randomItemNumber];

        let index = offers.indexOf(randomProduct);
        offers.splice(index, 1);
        return randomProduct
    }

    let cards = document.querySelectorAll('.slide');

    for( let card of cards) {
        let product = randomProduct(productData.offers);
        console.log(card.getElementsByClassName("fetched-name"));
        card.getElementsByClassName("product-photo")[0].src = 'http://'+product.imgURL;
        card.getElementsByClassName("fetched-name")[0].innerText = product.name;
        card.getElementsByClassName("fetched-price")[0].innerText = product.price + ',00 zł';
    }
});

