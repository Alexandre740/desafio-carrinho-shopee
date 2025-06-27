import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

console.log("\nWelcome to you Shopee Cart !!");

const myCart = [];
const myWishList = [];

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotweels Lambo", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 1);

await cartService.displayCart(myCart);

console.log("Shopee cart TOTAL IS: ");
await cartService.calculateTotal(myCart);

console.log('\n\n');

// await cartService.deleteItem(myWishList, item2.name);
// await cartService.deleteItem(myCart, item1.name);




