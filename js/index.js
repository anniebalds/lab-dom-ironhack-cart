// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');

  const subTotalPrice = price.innerHTML * quantity.value;

  subTotal.innerHTML = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  const finalPrice = document.querySelector('#total-value span');
  let finalTotal = 0;

  allProducts.forEach((product, i) => {
    finalTotal += updateSubtotal(product);
  })

  // ITERATION 3
  finalPrice.innerHTML = finalTotal
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  // currently working on this
  // target.parentNode.removeChild(target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn btn-remove');
  for (let i=0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct)
  }

});
