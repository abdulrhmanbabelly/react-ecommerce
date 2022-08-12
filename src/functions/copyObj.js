// this func is used to make a copy of carts to be able to manipulate it
let copyObj = (obj) => {
    
    let newObj = JSON.stringify(obj);

    return JSON.parse(newObj);

}

export default copyObj;