document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const foodItem = urlParams.get('food_item');
    const place = urlParams.get('place');
    const price = urlParams.get('price');

    let queryString = `http://localhost:3000/restaurants/search?food_item=${encodeURIComponent(foodItem)}`;
    if (place) {
        queryString += `&place=${encodeURIComponent(place)}`;
    }
    if (price) {
        queryString += `&price=${encodeURIComponent(price)}`;
    }

    console.log("Fetching URL:", queryString);

    try {
        const response = await fetch(queryString);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
        }
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (data.length === 0) {
        resultsDiv.innerHTML = '<p>No restaurants found</p>';
        return;
    }

    data.forEach(restaurant => {
        console.log("Restaurant Data:", restaurant); // Log to check the data structure
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('result-item');
        restaurantDiv.innerHTML = `
            <h3>${restaurant.restaurant_name}</h3>
            <p><strong>Food Item:</strong> ${restaurant.food_item}</p>
            <p><strong>Location:</strong> ${restaurant.city}</p>
            <p><strong>Rating:</strong> ${restaurant.rating}</p>
            <p><strong>Price:</strong> ₹${restaurant.price}</p>
            <img src="${restaurant.image_url}" alt="${restaurant.restaurant_name} Image" onerror="this.src='fallback-image-url.jpg';" />
        `;

        // Add click event to redirect to details page
        restaurantDiv.addEventListener('click', () => {
            window.location.href = `details.html?restaurant_id=${restaurant.restaurant_id}`;
        });

        resultsDiv.appendChild(restaurantDiv);
    });
}

function goBack() {
    window.history.back();
}