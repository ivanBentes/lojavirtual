function getProducts() {
    const token = getCookie('token');
    return fetch('http://localhost:8080/api/products',
        {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token, "content-type": 'application/json' },
        })
        .then((response) => {
            if (response.status > 299) throw new Error(response.statusText);
            return response.json();
        });
}

function createProduct(name, quantity, price, manufacturer, supplier) {
    const token = getCookie('token');
    const product = {
        name: name,
        quantity: quantity,
        price: price,
        manufacturer: manufacturer,
        supplier: supplier
    }
    return fetch('http://localhost:8080/api/products',
        {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token, "content-type": 'application/json' },
            body: JSON.stringify(product)
        })
        .then((response) => {
            if (response.status > 299) throw new Error(response.statusText);
            return response.json();
        });

}

function updateProduct(id, name, quantity, price, manufacturer, supplier) {
    const token = getCookie('token');
    const product = {
        id: id,
        name: name,
        quantity: quantity,
        price: price,
        manufacturer: manufacturer,
        supplier: supplier
    }
    return fetch('http://localhost:8080/api/products',
        {
            method: 'PUT',
            headers: { 'Authorization': 'Bearer ' + token, "content-type": 'application/json' },
            body: JSON.stringify(product)
        })
        .then((response) => {
            if (response.status > 299) throw new Error(response.statusText);
            return response.json();
        });

}

function deleteProduct(id) {
    const token = getCookie('token');
    return fetch('http://localhost:8080/api/products/' + id,
        {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + token }
        })
        .then((response) => {
            if (response.status > 299) throw new Error(response.statusText);
        });
}
