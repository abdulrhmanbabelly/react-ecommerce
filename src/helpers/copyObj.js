
let copyObj = (obj) => {
    
    let newObj = JSON.stringify(obj);

    return JSON.parse(newObj);

}

export default copyObj;