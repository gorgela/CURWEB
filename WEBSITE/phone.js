
    const colors = document.querySelectorAll('.color');
    const phoneImage = document.getElementById('phoneImage');

    colors.forEach(color => {
        color.addEventListener('click', function() {
            // Get the image path from the data attribute
            const newImage = this.getAttribute('data-image');
            // Change the phone image src
            phoneImage.src = newImage;
        });
    });


    

