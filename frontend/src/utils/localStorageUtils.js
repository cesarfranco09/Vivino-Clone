
export function localStorageCartData() {
    let item = localStorage.getItem("vin_cart");
    if (!item) return [];
    return JSON.parse(item);
}

export function addCart(wine) {
    const cartItem = localStorageCartData()
    const existItem = cartItem.find(cart => cart.id == wine.id);
    if (existItem) {
        existItem.count += 1;
    } else {
        wine.count = 1;
        cartItem.push(wine);
    }
    localStorage.setItem("vin_cart", JSON.stringify(cartItem));
}

export function deleteCart(id) {
    let carts = localStorageCartData()
    localStorage.setItem("vin_cart", JSON.stringify(carts.filter((cart) => cart.id != id)))
}
