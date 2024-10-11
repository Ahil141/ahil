

CREATE TABLE Restaurants (
    restaurant_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    postal_code VARCHAR(20),
    phone_number VARCHAR(20),
    rating DECIMAL(2, 1)
);

CREATE TABLE Food_Items (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100),
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(restaurant_id) ON DELETE CASCADE
);

CREATE TABLE Reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    user_name VARCHAR(255),
    rating DECIMAL(2, 1),
    review_text TEXT,
    review_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(restaurant_id) ON DELETE CASCADE
);





INSERT INTO Restaurants (name, city, postal_code, phone_number, rating) VALUES
('Restaurant A', 'Kochi', '682001', '1234567890', 4.5),
('Restaurant B', 'Kochi', '682002', '0987654321', 4.0),
('Restaurant C', 'Bengaluru', '560001', '1122334455', 3.9),
('Restaurant D', 'Kochi', '682003', '2233445566', 4.2),
('Restaurant E', 'Kochi', '682004', '3344556677', 4.7),
('Restaurant F', 'Bengaluru', '560002', '4455667788', 4.1);


INSERT INTO Food_Items (restaurant_id, name, price, category) VALUES
(1, 'Burger', 100.00, 'Fast Food'),
(1, 'Pizza', 180.00, 'Fast Food'),
(2, 'Pasta', 150.00, 'Italian'),
(2, 'Burger', 120.00, 'Fast Food'),
(3, 'Pizza', 200.00, 'Italian'),
(4, 'Salad', 80.00, 'Healthy'),
(4, 'Burger', 110.00, 'Fast Food'),
(5, 'Pizza', 190.00, 'Italian'),
(5, 'Burger', 130.00, 'Fast Food'),
(6, 'Pasta', 160.00, 'Italian');


INSERT INTO Reviews (restaurant_id, user_name, rating, review_text) VALUES
(1, 'Alice', 4.5, 'Great food and excellent service!'),
(1, 'Bob', 4.0, 'Loved the burger, will definitely come back!'),
(2, 'Charlie', 3.5, 'The pasta was good but a bit overpriced.'),
(3, 'David', 4.0, 'Nice ambiance and tasty pizza.'),
(4, 'Eve', 4.2, 'Best burger in Kochi! Highly recommend.'),
(5, 'Frank', 4.7, 'Amazing pizza, fresh ingredients!'),
(6, 'Grace', 4.1, 'Good pasta, but the service was slow.');


ALTER TABLE restaurants CHANGE name restaurant_name VARCHAR(225);

ALTER TABLE Restaurants ADD COLUMN image_url VARCHAR(255);

select * from restaurants;

UPDATE Restaurants SET image_url = 'https://th.bing.com/th/id/OIP.64vdVCN6KYVutR1pmeC_PAHaEo?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' WHERE restaurant_id = 1;

	UPDATE Restaurants SET image_url = 'https://th.bing.com/th/id/OIP.4QurofPbX72Nkr4JCUCcDQHaEK?w=353&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' WHERE restaurant_id = 2;

    UPDATE Restaurants SET image_url = 'https://th.bing.com/th/id/OIP.0_X2sthJ7Qe1UPwZ0D9oOAHaEL?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' WHERE restaurant_id = 3;

    UPDATE Restaurants SET image_url = 'https://th.bing.com/th/id/OIP.Zn6WbxboaZ7mPMHOy2x7nAAAAA?w=249&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7' WHERE restaurant_id = 4;

    UPDATE Restaurants SET image_url = 'https://th.bing.com/th/id/OIP.GnqWqrN1a_KshH3LexNR7QAAAA?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' WHERE restaurant_id = 5;

    UPDATE Restaurants SET image_url = 'https://th.bing.com/th/id/OIP.64vdVCN6KYVutR1pmeC_PAHaEo?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' WHERE restaurant_id = 6;


    CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

select * from users;

INSERT INTO users (username, password)
VALUES (
    'ahil','ahil@123'
  );
  INSERT INTO users (username, password)
VALUES (
    'aravind','aravind@123'
  );
  INSERT INTO users (username, password)
VALUES (
    'ephraim','ephraim@123'
  );
  INSERT INTO users (username, password)
VALUES (
    'geevar','geevar@123'
  );
  INSERT INTO users (username, password)
VALUES (
    'savin','savin@123'
  );

select * from restaurants;

  update Restaurants set restaurant_name='Rice boat Restaurant' WHERE restaurant_id=1;
   update Restaurants set restaurant_name='Paragon',city='Kozhikode' WHERE restaurant_id=2;
    update Restaurants set restaurant_name='Kashi Art Cafe',city='Kochi' WHERE restaurant_id=3;
     update Restaurants set restaurant_name='Villa Maya',city='Thiruvananthapuram' WHERE restaurant_id=4;
      update Restaurants set restaurant_name='Malabar Cafe',city='Kochi' WHERE restaurant_id=5;
       update Restaurants set restaurant_name='Cafe Jade',city='Thiruvananthapuram' WHERE restaurant_id=6;

INSERT INTO food_items (restaurant_id, name, price, category)
VALUES 
   (1, 'California Roll', 300.00, 'Sushi'),
(1, 'Chicken Tacos', 150.00, 'Mexican'),
  (1, 'Spaghetti', 200.00, 'Italian'),
(1, 'Hyderabadi Biriyani', 400.00, 'Indian'),
  (1, 'Masala Dosa', 120.00, 'South Indian'),
(1, 'Biryani', 350.00, 'Indian'),
(2, 'Masala Dosa', 100.00, 'South Indian'),
(2, 'Chicken Tacos', 160.00, 'Mexican'),
(2, 'Biryani', 300.00, 'Indian'),
(2, 'Falafel Wrap', 150.00, 'Middle Eastern'),
(2, 'Noodles', 300.00, 'Thai'),
(3, 'California Roll', 200.00, 'Sushi'),
(3, 'Vegetable Dumblings', 180.00, 'Asian'),
(3, 'Fish Molee', 350.00, 'Indian'),
(3, 'Meals', 100.00, 'Indian'),
(4, 'Masala Dosa', 110.00, 'Indian'),
(4, 'Biryani', 160.00, 'Indian'),
(4, 'chocolate lava cake', 180.00, 'Dessert'),
(4, 'Paneer Butter Masala', 250.00, 'Indian'),
(4, 'Fish Molee', 280.00, 'Kerala'),
(5, 'Chicken Tacos', 150.00, 'Mexican'),
(5, 'Tandoori Chicken', 350.00, 'Indian'),
(5, 'szechuan Noodles', 250.00, 'Chinese'),
(5, 'Fish Fry', 190.00, 'Kerala'),
(5, 'Beef Vindaloo', 400.00, 'Indian'),
(5, 'Paneer Butter Masala', 220.00, 'Indian'),
(6, 'Spaghetti', 180.00, 'Italian'),
(6, 'Chicken Curry', 140.00, 'Indian'),
(6, 'Biryani', 230.00, 'Indian'),
(6, 'Vegetable Samosa', 80.00, 'Indian Snack'),
(6, 'Coconut Rice', 150.00, 'Kerala');
  
  select * from food_items;