import express from 'express';
import cors from 'cors';
import pool from './db.js'; // Assuming db.js contains the pool configuration
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve login page as the entry point
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Serve index page
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Login attempt:', username);

    const query = `SELECT * FROM Users WHERE username = ? AND password = ?`;
    try {
        const [results] = await pool.query(query, [username, password]);
        if (results.length > 0) {
            console.log('Login successful:', results);
            res.status(200).send(); // Send a success response without redirection
        } else {
            console.log('Invalid credentials');
            res.status(401).send('Invalid credentials'); // Unauthorized
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to search for restaurants
app.get('/restaurants/search', async (req, res) => {
    console.log("Request received for search", req.query);
    const { food_item, place, price } = req.query;

    let query = `SELECT r.restaurant_id, r.restaurant_name, r.city, r.rating, r.image_url, f.name AS food_item, f.price
                 FROM Restaurants r
                 JOIN Food_Items f ON r.restaurant_id = f.restaurant_id
                 WHERE f.name LIKE ?`;  
    const values = [`%${food_item}%`];

    if (place) {
        query += ' AND r.city = ?';
        values.push(place);
    }

    if ( price) {
        query += ' AND f.price <= ?';
        values.push(price);
    }

    try {
        const [results] = await pool.query(query, values);
        console.log("Search results: ", results); 
        res.json(results);
    } catch (error) {
        console.error("Search error: ", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to fetch details of a specific restaurant
app.get('/restaurants/details', async (req, res) => {
    const { restaurant_id } = req.query;
    console.log("Request received for details", req.query); 

    if (!restaurant_id) {
        return res.status(400).json({ error: 'Restaurant ID is required' });
    }

    const query1 = `SELECT restaurant_id, restaurant_name, city, postal_code, phone_number, rating, image_url
                    FROM Restaurants
                    WHERE restaurant_id = ?`;

    const query2 = `SELECT name, price
                    FROM Food_Items
                    WHERE restaurant_id = ?`;

    try {
        const [restaurant] = await pool.query(query1, [restaurant_id]);
        const [menuItems] = await pool.query(query2, [restaurant_id]);

        if (!restaurant.length) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }

        console.log("Restaurant details: ", restaurant); 
        console.log("Menu items: ", menuItems); 

        res.json({
            restaurant: restaurant[0], 
            menu_items: menuItems 
        });
    } catch (error) {
        console.error("Details error: ", error); 
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






















