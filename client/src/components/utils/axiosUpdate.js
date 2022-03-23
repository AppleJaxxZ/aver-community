import axios from 'axios'

export const axiosPatch = (token, newName, type) => {
    var toObject = JSON.parse(`{"${type}":"${newName}"}`)
    var data = JSON.stringify(toObject);
    var config = {
        method: 'patch',
        url: 'http://localhost:5000/users/me',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };
    console.log(toObject)
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}