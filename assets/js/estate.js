const qutu = document.getElementById("storiesCard")
let db;

async function getProduct() {
    const response = await axios.get("https://65685e799927836bd974a707.mockapi.io/products")
    const data = await response.data;
    db = data;
    console.log(db);

    db.map(item => {
        
        const box = document.createElement("div");
        box.innerHTML = `
        <p>${item.title}</p>
        <h1>${item.price}</h1>
        <img src="${item.image}" alt="">
        <button onclick= "AddToBasket(${item.id})">Sepete Ekle</button>`;
        qutu.appendChild(box);
    })
}

function AddToBasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find(item => item.id == id));
    localStorage.setItem('cart', JSON.stringify(cart));
}
getProduct()