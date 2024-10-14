document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get('restaurant_id');

    if (!restaurantId) {
        document.getElementById('restaurant-name').innerText = 'Restaurant not found';
        return;
    }

    // Corrected template literal syntax
    let queryString = `http://localhost:3000/restaurants/details?restaurant_id=${restaurantId}`;
    console.log("Fetching URL:", queryString);

    try {
        const response = await fetch(queryString);
        if (!response.ok) {
            const errorText = await response.text();
            // Corrected template literal syntax
            throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
        }

        const restaurantData = await response.json();
        console.log("Fetched Restaurant Data: ", restaurantData); // Log fetched data
        displayDetails(restaurantData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function displayDetails(restaurantData) {
    console.log("Displaying Restaurant Data:", restaurantData); // Log to check the data structure

    // Restaurant details from the database
    const { restaurant, menu_items } = restaurantData;

    document.getElementById('restaurant-name').innerText = restaurant.restaurant_name;
    document.getElementById('restaurant-city').innerText = restaurant.city;
    document.getElementById('restaurant-postal-code').innerText = restaurant.postal_code;
    document.getElementById('restaurant-phone-number').innerText = restaurant.phone_number;
    document.getElementById('restaurant-rating').innerText = restaurant.rating;

    // Clear previous menu items if any
    const menuItemsDiv = document.getElementById('menu-items');
    menuItemsDiv.innerHTML = '';

    // Display each menu item
    menu_items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.innerHTML = `
            <p><strong>${item.name}</strong>: ₹${item.price}</p>
        `;
        menuItemsDiv.appendChild(itemDiv);
    });
}

function goBack() {
    window.history.back();
}


function goBack() {
    window.history.back();
}




