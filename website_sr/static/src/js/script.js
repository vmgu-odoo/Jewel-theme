function changeImage(img) {
    var bigImage = document.getElementById("bigImage");
    bigImage.src = img.src;
}

function changeColor(color) {
    var colorName;
    var imageName;
    
    switch (color) {
        case 'white':
            colorName = 'White Gold';
            imageName = '/website_sr/static/src/images/silverring1.jpg';
            break;
        case 'rosa':
            colorName = 'Rosa Gold';
            imageName = '/website_sr/static/src/images/earings.jpg';
            break;
        case 'yellow':
            colorName = 'Yellow Gold';
            imageName = '/website_sr/static/src/images/bracelet1.jpg';
            break;
        default:
            colorName = 'Unknown';
            imageName = '';
    }

    document.getElementById('color-name').innerText = colorName;
    document.getElementById('bigImage').src = imageName;
}

function changeColorByImage(imageSrc) {
    var color;
    var colorName;
    
    if (imageSrc.includes('/website_sr/static/src/images/silverring1.jpg')) {
        color = 'white';
        colorName = 'White Gold';
    } else if (imageSrc.includes('/website_sr/static/src/images/earings.jpg')) {
        color = 'rosa';
        colorName = 'Rosa Gold';
    } else if (imageSrc.includes('/website_sr/static/src/images/bracelet1.jpg')) {
        color = 'yellow';
        colorName = 'Yellow Gold';
    }
    
    document.getElementById('color-name').innerText = colorName;
    changeColor(color);
}

// ACCORDIAN

document.addEventListener("DOMContentLoaded", function() {
    var accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function(header) {
        header.addEventListener("click", function() {
            var accordionItem = this.parentNode;
            var accordionContent = accordionItem.querySelector(".accordion-content");
            var icon = this.querySelector(".icon");

            // Close all accordion items
            document.querySelectorAll(".accordion-item").forEach(function(item) {
                item.classList.remove("active");
                item.querySelector(".accordion-content").style.display = "none";
                item.querySelector(".icon").textContent = "+";
            });

            // Toggle the clicked accordion item
            accordionItem.classList.toggle("active");
            if (accordionItem.classList.contains("active")) {
                accordionContent.style.display = "block";
                icon.textContent = "-";
            } else {
                accordionContent.style.display = "none";
                icon.textContent = "+";
            }
        });
    });
    var defaultAccordion = document.querySelector(".accordion-item.active .accordion-content");
    defaultAccordion.style.display = "block";
});


// header

