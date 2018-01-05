import "whatwg-fetch"

export function getUsers() {
    const rtn = get('users');
    console.log(rtn);
    return rtn;
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess (response) {
    console.log('In success');
    return response.json();
}

function onError (error) {
    console.log(error); // eslint-disable-line no-console
}
