import dataJSON from './data.json';

export default {

    getUserData: (id) => {

        // Set the dataBase if is empty
        if (!(localStorage.getItem('database'))) {
            localStorage.setItem('database', JSON.stringify(dataJSON))
        }

        var user = {};
        var i = 0;
        var data = JSON.parse(localStorage.getItem('database'));

        while (i < data.length) {
            if (data[i].id === id) user = data[i];
            i++;
        }

        return user;
    },

    setUserData: (id, firstName, lastName, birthDate, address, email) => {

        var i = 0;

        var data = JSON.parse(localStorage.getItem('database'));

        while (i < data.length) {
            if (data[i].id === id){
                data[i].firstName = firstName;
                data[i].lastName = lastName;
                data[i].birthDate = birthDate;
                data[i].address = address;
                data[i].email = email;
            }
            i++;
        }
        localStorage.setItem('database', JSON.stringify(data))
    },

    setNewPassword: (id, oldPassword, newPassword, confirmPassword) => {

        var i = 0;
        var data = JSON.parse(localStorage.getItem('database'));

        while (i < data.length) {
            if (data[i].id === id){
                if (data[i].password === oldPassword){
                    if (newPassword === confirmPassword){
                        data[i].password = newPassword;
                        localStorage.setItem('database', JSON.stringify(data))
                    }
                }
            }
        }

    }

}