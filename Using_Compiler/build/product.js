"use strict";
class Product {
    constructor(name, unitPrice) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.name = name;
        this.unitPrice = unitPrice;
    }
    getDiscountedPrice(discount) {
        return this.unitPrice - discount;
    }
}
const table = new Product("Table", 50);
console.log(table.getDiscountedPrice(5));
