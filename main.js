const template = `
<div class="item">
<img src="http://placehold.it/300x275">
<p class="title">PRINTED custom cognac label, custom valentines liquor label, groomsman gift, groomsmen proposal, boyfriend valentine gift, father&#39;s day gift</p>
<p class="seller">CulturePopShop</p>
<p class="price">3.95</p>
</div>
`

function makeItem(item) {
    return `
    <div class="item">
    <img src="${item.img}">
    <p class="title">${item.title}</p>
    <p class="seller">${item.seller}</p>
    <p class="price">$${item.price}</p>
    </div>
    `
}

let htmlStr = ''
items.results.forEach(item => {
    htmlStr += makeItem({
        img: item.Images[0].url_170x135,
        title: item.title,
        seller: item.Shop.shop_name,
        price: item.price
    })
})

document.querySelector("#etsythings").innerHTML = htmlStr