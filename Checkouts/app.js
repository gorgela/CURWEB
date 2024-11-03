document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    const hiddenQuantityInput = document.getElementById('quantityInput');

    // Update the hidden input whenever the quantity input changes
    quantityInput.addEventListener('input', function() {
        hiddenQuantityInput.value = this.value; // Update hidden input with the quantity
    });

    // Set initial value of hidden input to match the quantity input
    hiddenQuantityInput.value = quantityInput.value;
});
