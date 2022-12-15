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
    const amount = document.getElementsByClassName('amount')[a].value;
    order.push({...products[a], quantity: amount, totalPrice: amount * products[a].price});
    orderDetail();
}  
function delElement(a){
    order.splice(a, 1);
    orderDetail();
}
function orderDetail() {
    let j = 0,
      total = 0;
    document.getElementById("count").innerHTML = order.length;
    if (order.length == 0) {
      document.getElementById("cartItem").innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
      document.getElementById("cartItem").innerHTML = order.map((items) => {
        const { title, quantity, price, totalPrice, action } = items;
  
        total = total + totalPrice;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'> ${quantity}</h2>
            <h2 style='font-size: 15px;'>$ ${price}.00</h2>
            <h2 style='font-size: 15px;'>$ ${totalPrice}.00</h2>
            <button onclick='delElement(${j++})'>Remove</button>
          </div>`
        );
      }).join('');
    }
  }
  