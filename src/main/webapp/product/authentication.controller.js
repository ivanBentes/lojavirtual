function login() {
    const params = {
        username: 'admin',
        password: 'admin',
        rememberMe: true
    };
    return fetch('http://localhost:8080/api/authenticate',
        {
            method: 'POST',
            body: JSON.stringify(params),
            headers:
                { "content-type": 'application/json' }
        })
        .then((response) => {
            return response.json();
        }).then((data) => {
            const token = data.id_token;
            setCookie('token', token, 1);
        });
}
