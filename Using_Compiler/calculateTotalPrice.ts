function calculateTotalPrice( // added Type annotations to the function parameters
    product: { name: string, UnitPrice: number}, 
    quantity: number, 
    discount: number) {
    const priceWithoutDiscount = product.UnitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount
    return priceWithoutDiscount - discountAmount
}


///////////////////////


/* function getTotal( 
    UnitPrice: number
    quantity: number, 
    discount: number): number {

    const priceWithoutDiscount = UnitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount

    return priceWithoutDiscount - discountAmount
}

let total: string = getTotal( 500, "one", 0.1) // error: Argument of type 'string' is not assignable to parameter of type 'number'.
 */