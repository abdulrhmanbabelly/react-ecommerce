
let excelUsersData = (users) => {

    let excelUsersData = [];

    for (let i = 0; i < users.length; i++) {
        
        excelUsersData[i] = {};

        excelUsersData[i].id = users[i].id;
        excelUsersData[i].email = users[i].email;
        excelUsersData[i].username = users[i].username;
        excelUsersData[i].password = users[i].password;
        excelUsersData[i].firstname = users[i].name.firstname;
        excelUsersData[i].lastname = users[i].name.lastname;
        excelUsersData[i].city = users[i].address.city;
        excelUsersData[i].street = users[i].address.street;
        excelUsersData[i].number = users[i].address.number;
        excelUsersData[i].zipcode = users[i].address.zipcode;
        excelUsersData[i].lat = users[i].address.geolocation.lat;
        excelUsersData[i].long = users[i].address.geolocation.long;
        excelUsersData[i].phone = users[i].phone;
    }

    return excelUsersData;

}

export default excelUsersData;