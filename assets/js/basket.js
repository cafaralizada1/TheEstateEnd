const qutu = document.getElementById('unit1')

function getProducts(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    qutu.innerHTML = "",

    cart.map((item, index) => {
        let box = document.createElement('div')
        box.innerHTML = `
        <p>${item.title}</p>
        <h1>${item.price}</h1>
        <img src="${item.image}" alt="">
        <button onclick=removeItem"(${index})">Sil</button>`
        qutu.appendChild(box);
        })
}
    function removeItem(index){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart',JSON.stringify(cart));
        getProducts()
    }


getProducts()