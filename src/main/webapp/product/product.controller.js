let currentId;

function editModalTriggers() {
    const openBtnConfirmUpdate = document.getElementById('confirm-button-update');
    const closeBtn = document.getElementById('close-button-update');
    const modalUpdate = document.getElementById('my-modal-update');
    closeBtn.addEventListener('click', () => {
        modalUpdate.close();
    });
    openBtnConfirmUpdate.addEventListener('click', () => {
        const nameUpdate = document.getElementById('nameUpdate').value;
        const quantityUpdate = document.getElementById('quantityUpdate').value;
        const priceUpdate = document.getElementById('priceUpdate').value;
        const manufacturerUpdate = document.getElementById('manufacturerUpdate').value;
        const supplierUpdate = document.getElementById('supplierUpdate').value;
        if (this.validateUpdateForm() !== false) {
            updateProduct(this.currentId, nameUpdate, quantityUpdate, priceUpdate, manufacturerUpdate, supplierUpdate)
                .then(() => {
                    window.alert('Atualizado com sucesso.');
                    location.reload();
                })
                .catch(error => {
                    window.alert(error.message);
                });
            modalUpdate.close();
        }
    });
}

function editElementTriggers(id, name, quantity, price, manufacturer, supplier) {
    const openBtnUpdate = document.getElementById('update-product-' + id);
    const modalUpdate = document.getElementById('my-modal-update');
    openBtnUpdate.addEventListener('click', () => {
        document.getElementById('nameUpdate').value = name;
        document.getElementById('quantityUpdate').value = quantity;
        document.getElementById('priceUpdate').value = price;
        document.getElementById('manufacturerUpdate').value = manufacturer;
        document.getElementById('supplierUpdate').value = supplier;
        this.currentId = id;
        modalUpdate.showModal();
    });
}

function deleteModalTrigger() {
    const closeBtn = document.getElementById('close-button-delete');
    const modalDelete = document.getElementById('delete-modal');
    const confirmBtn = document.getElementById('confirm-button-delete');
    closeBtn.addEventListener('click', () => {
        modalDelete.close();
    });
    confirmBtn.addEventListener('click', () => {
        deleteProduct(this.currentId).then(() => {
            window.alert('Deletado com sucesso.');
            location.reload();
        }).catch(error => {
            window.alert(error.message);
        });
        modalDelete.close();
    });

}

function deleteElementTriggers(id) {
    const openBtnDelete = document.getElementById('delete-product-' + id);
    const modalDelete = document.getElementById('delete-modal');
    openBtnDelete.addEventListener('click', () => {
        this.currentId = id;
        modalDelete.showModal();
    });

}

function getAllProducts() {
    getProducts().then((data) => {
        data.forEach(element => {
            const child = '<tr><td>' + element.name +
                '</td><td>' + element.quantity +
                '</td><td>' + element.price +
                '</td><td>' + element.manufacturer +
                '</td><td>' + element.supplier +
                '</td><td>' + '<button class="button button-edit" id="update-product-' + element.id + '">Editar produto</button>' +
                '</td><td>' + '<button class="button button-delete"id="delete-product-' + element.id + '">Excluir produto</button>' +
                '</td></tr>';
            document.getElementById('productTable').insertAdjacentHTML('beforeend', child);
            deleteElementTriggers(element.id);
            editElementTriggers(element.id, element.name, element.quantity, element.price, element.manufacturer, element.supplier);
        });
    });
}

function validateCreateForm() {
    var name = document.forms["CreateForm"]["name"].value;
    var quantity = document.forms["CreateForm"]["quantity"].value;
    var price = document.forms["CreateForm"]["price"].value;
    var manufacturer = document.forms["CreateForm"]["manufacturer"].value;
    var supplier = document.forms["CreateForm"]["supplier"].value;
    if (name == "" && quantity == "" && price == "" && manufacturer == "" && supplier == "") {
        alert("Todos os campos são obrigatórios");
        return false;
    } else {
        if (name == "") {
            alert("O nome é obrigatório");
            return false;
        } else {
            if (quantity == "") {
                alert("O quantidade é obrigatória");
                return false;
            } else {
                if (price == "") {
                    alert("O preço é obrigatório");
                    return false;
                } else {
                    if (manufacturer == "") {
                        alert("O fabricante é obrigatório");
                        return false;
                    } else {
                        if (supplier == "") {
                            alert("O fornecedor é obrigatório");
                            return false;
                        }
                    }
                }
            }
        }
    }
}

function validateUpdateForm() {
    var name = document.forms["UpdateForm"]["name"].value;
    var quantity = document.forms["UpdateForm"]["quantity"].value;
    var price = document.forms["UpdateForm"]["price"].value;
    var manufacturer = document.forms["UpdateForm"]["manufacturer"].value;
    var supplier = document.forms["UpdateForm"]["supplier"].value;
    if (name == "" && quantity == "" && price == "" && manufacturer == "" && supplier == "") {
        alert("Todos os campos são obrigatórios");
        return false;
    } else {
        if (name == "") {
            alert("O nome é obrigatório");
            return false;
        } else {
            if (quantity == "") {
                alert("O quantidade é obrigatória");
                return false;
            } else {
                if (price == "") {
                    alert("O preço é obrigatório");
                    return false;
                } else {
                    if (manufacturer == "") {
                        alert("O fabricante é obrigatório");
                        return false;
                    } else {
                        if (supplier == "") {
                            alert("O fornecedor é obrigatório");
                            return false;
                        }
                    }
                }
            }
        }
    }
}

function addModalTriggers() {
    const openBtn = document.getElementById('create-product');
    const closeBtn = document.getElementById('close-button');
    const modal = document.getElementById('my-modal');
    const openBtnConfirmCreate = document.getElementById('confirm-button-create');
    openBtn.addEventListener('click', () => {
        modal.showModal();
    });
    closeBtn.addEventListener('click', () => {
        modal.close();
    });
    openBtnConfirmCreate.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;
        const manufacturer = document.getElementById('manufacturer').value;
        const supplier = document.getElementById('supplier').value;
        if (this.validateCreateForm() !== false) {
            createProduct(name, quantity, price, manufacturer, supplier)
                .then(data => {
                    modal.close();
                    window.alert('Cadastrado com sucesso.');
                    location.reload();
                })
                .catch(error => {
                    window.alert(error.message);
                });
        }
    });
}

