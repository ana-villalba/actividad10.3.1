document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item');
    const addItemButton = document.getElementById('agregar');
    const clearItemButton = document.getElementById('limpiar');
    const itemList = document.getElementById('contenedor');



    function loadItems() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        itemList.innerHTML = '';

        items.forEach(item => {
            const li = document.createElement('li'); 
            li.textContent = item; 
            itemList.appendChild(li);
        });
    }

    function saveItem(item) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
    }

    function clearItems() {
        localStorage.removeItem('items');
        loadItems();
    }

    addItemButton.addEventListener('click', () => {
        const item = itemInput.value.trim();
        if (item) {
            saveItem(item);
            itemInput.value = '';
            loadItems();
        }
    });

    clearItemButton.addEventListener('click', () => {
        clearItems();
    });

    loadItems();
});