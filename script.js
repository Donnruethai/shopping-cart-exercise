// cakes array

const cakes = [
    {
        id: 0,
        image: 'images/brownie.jpg',
        title: 'Brownie',
        price: 15,
    },
    {
        id: 1,
        image: 'images/red.jpg',
        title: 'Red Velvet Cake',
        price: 60,
    },
    {
        id: 2,
        image: 'images/cupchoc.jpg',
        title: 'Chocolate Cupcake',
        price: 8,
    },
    {
        id: 3,
        image: 'images/macaron.jpg',
        title: 'Macaron',
        price: 9,
    }
];

// Show all products

let i = 0;
const products = [...new Set(cakes.map(function(item) {
  return item;
}))];
const rootElement = document.getElementById('root');

let showProducts = "";
for (const item of products) {
  const { image, title, price } = item;
  showProducts += `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom-img'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>
        <input class='amount' type="number" min="1" >
        <button onclick='addToOrder(${i++})'>Add to cart</button>
      </div>
    </div>`;
}

rootElement.innerHTML = showProducts;


const order =[];

function addToOrder(a){
    order.push({...products[a]});
    orderDetail();
}

