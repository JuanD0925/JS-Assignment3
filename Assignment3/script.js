// script.js
class Smoothie {
    constructor(customerName, size, ingredients, sweetener, notes) {
        this.customerName = customerName;
        this.size = size;
        this.ingredients = ingredients;
        this.sweetener = sweetener;
        this.notes = notes;
    }

    generateSummary() {
        return `
            <p><strong>Customer Name:</strong> ${this.customerName}</p>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(', ')}</p>
            <p><strong>Sweetener:</strong> ${this.sweetener}</p>
            <p><strong>Special Instructions:</strong> ${this.notes || 'None'}</p>
        `;
    }
}

document.getElementById('orderButton').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const size = document.getElementById('size').value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked')).map(input => input.value);
    const sweetener = document.getElementById('sweetener').value;
    const notes = document.getElementById('notes').value.trim();

    if (!name || !size || ingredients.length === 0) {
        alert('Please fill out all required fields and select at least one ingredient.');
        return;
    }

    const smoothie = new Smoothie(name, size, ingredients, sweetener, notes);
    document.getElementById('output').innerHTML = smoothie.generateSummary();
});
