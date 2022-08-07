
let excelProductsData = (products) => {

    let excelProductsData = [];

    for (let i = 0; i < products.length; i++) {
        excelProductsData[i] = {};
        excelProductsData[i].id = products[i].id;
        excelProductsData[i].category = products[i].category;
        excelProductsData[i].title = products[i].title;
        excelProductsData[i].rate = products[i].rating.rate;
        excelProductsData[i].count = products[i].rating.count;
        excelProductsData[i].price = products[i].price + "$";
    }

    return excelProductsData;

}

export default excelProductsData;