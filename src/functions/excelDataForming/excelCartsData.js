
let excelCartsData = (carts) => {

    let excelData = [];
    let max = 0;
    let products = [];

    for (let i = 0; i < carts.length; i++) {
        max = Math.max(carts[i].products.length, max);
    }

    for (let j = 0; j < max; j++) products.push(j + 1);

    for (let i = 0; i < carts.length; i++) {
        excelData[i] = {};
        excelData[i].id = carts[i].id;
        excelData[i].userId = carts[i].userId;
        excelData[i].date = carts[i].date;
        for (let j = 0; j < max; j++) {
            if (carts[i].products[j]) excelData[i][`product_${j + 1}`] = `id : ${carts[i].products[j].productId} quantity : ${carts[i].products[j].quantity}`;
        }

    }

    return { excelData, products };

}

export default excelCartsData;