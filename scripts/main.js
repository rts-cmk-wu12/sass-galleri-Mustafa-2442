const API_URL = 'http://localhost:3000/db.json'; // Adjusted to point to the JSON file
const BASE_IMAGE_URL = 'http://localhost:3000/img/'; // Base URL for images

async function fetchImages() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const gallery = document.querySelector('.gallery');
        data.images.forEach(item => {
            const imgElement = document.createElement('img');
            imgElement.src = BASE_IMAGE_URL + item.name; // Construct the full image URL
            imgElement.alt = `Gallery Image ${item.id}`;
            gallery.appendChild(imgElement);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the function to fetch images when the document is ready
document.addEventListener('DOMContentLoaded', fetchImages);
