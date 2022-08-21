const cartArray = [];
function addToCart(element) {
    const name = element.parentNode.parentNode.children[0].innerText;
    const price = element.parentNode.parentNode.children[1].children[0].innerText;

    const elementObj = {
        productName: name,
        productPrice: price
    };
    cartArray.push(elementObj);
    const tableBody = document.getElementById('products-cart');
    // let arraylength=cartArray.length;
    document.getElementById('total-products').innerText = cartArray.length;
    tableBody.innerText = '';
    let totalPrice = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
       `
        totalpriceNumber = parseInt(price);
        totalPrice = totalPrice + totalpriceNumber;
        tableBody.appendChild(tr)

    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>TotalPrice</td>
    <td>${totalPrice}</td>
   `
    tableBody.appendChild(tr);

}