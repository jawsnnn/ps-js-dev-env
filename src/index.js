import {getUsers} from './api/userAPI';

getUsers().then(result => {
    console.log(result); //eslint-disable-line no-console
    var usersBody  = "";
    result.forEach(user => {
        usersBody += `<tr>
            <td><a href = "#" data-id = "${user.id}" class = "deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>`
    });
    global.document.getElementById('users').innerHTML = usersBody;
});
