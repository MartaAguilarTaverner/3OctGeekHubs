const introSales = prompt("Introduce el número de ventas");
const salesInt = parseInt(introSales);
let salesResult = 0;

for (let i = 1; i <= salesInt; i++) {
    const salePrice = prompt("Introduce el precio de la venta " + i);

    salesResult += parseInt(salePrice);
}
