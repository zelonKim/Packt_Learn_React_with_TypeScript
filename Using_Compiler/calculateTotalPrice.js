function calculateTotalPriceJS(product, quantity, discount) {
    const priceWithoutDiscount = product.price * quantity;
    const discountAmount = priceWithoutDisCount * discount
    return priceWithoutDiscount - discountAmount
}