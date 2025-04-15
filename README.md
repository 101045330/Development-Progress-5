# Development Progress 5

## About this web project
For detailed information about the design rationale behind this project, please refer to the Design Rationale document below:
https://github.com/101045330/Development-Progress-5/blob/main/Design%20Rationale%20(3).pdf (2)

## Home Page Design

https://github.com/101045330/Development-Progress-5/blob/main/01HOME.png
*Home Page Design*

## Sitemap
The initial sitemap for this project can be found here.pdf). Note that the "resume" and "blog" links have been removed from the final version.

## Project Overview
This project aims to showcase an attractive portfolio website that adapts to different screen resolutions. 
 The design and development process is documented to provide insights into the project's progress and decision-making.

## Features

- **Responsive Design**: Ensures compatibility across different devices and screen sizes.
- **Interactive UI**: Engaging and user-friendly interface.
- ** Generated content **: Generated text and images for rapid project completion


## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Version Control**: Git

## Installation
To set up the project locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/101045330/Development-Progress-5.git

==== 2025 === 
 <pre>
          To integrate Node.js with Express and MySQL stored procedures for adding content to your website, follow these steps:

          1. **Set up Node.js and Express**:
            - Install Node.js and create a new project using `npm init`.
            - Install Express and MySQL libraries:
              ```bash
              npm install express mysql
              ```

          2. **Create an Express server**:
            - Create a file `server.js` and set up a basic Express server:
              ```javascript
              const express = require('express');
              const mysql = require('mysql');
              const app = express();
              const port = 3000;

              // Middleware to parse JSON
              app.use(express.json());

              // MySQL connection
              const db = mysql.createConnection({
               host: 'localhost',
               user: 'root',
               password: 'yourpassword',
               database: 'yourdatabase'
              });

              db.connect(err => {
               if (err) {
                console.error('Database connection failed:', err.stack);
                return;
               }
               console.log('Connected to MySQL database.');
              });

              // Route to add content using a stored procedure
              app.post('/add-content', (req, res) => {
               const { title, description } = req.body;
               const query = 'CALL AddContent(?, ?)';
               db.query(query, [title, description], (err, results) => {
                if (err) {
                  console.error(err);
                  res.status(500).send('Error executing stored procedure');
                } else {
                  res.status(200).send('Content added successfully');
                }
               });
              });

              app.listen(port, () => {
               console.log(`Server running at http://localhost:${port}`);
              });
              ```

          3. **Create a MySQL stored procedure**:
            - In your MySQL database, create a stored procedure to handle content insertion:
              ```sql
              DELIMITER $$

              CREATE PROCEDURE AddContent(IN title VARCHAR(255), IN description TEXT)
              BEGIN
               INSERT INTO content_table (title, description) VALUES (title, description);
              END$$

              DELIMITER ;
              ```

          4. **Update your HTML to interact with the backend**:
            - Add a form to your HTML for submitting content:
              ```html
              <form id="contentForm">
               <input type="text" name="title" placeholder="Title" required>
               <textarea name="description" placeholder="Description" required></textarea>
               <button type="submit">Add Content</button>
              </form>

              <script>
               document.getElementById('contentForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());

                const response = await fetch('/add-content', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });

                if (response.ok) {
                  alert('Content added successfully!');
                } else {
                  alert('Failed to add content.');
                }
               });
              </script>
              ```

          5. **Run the server**:
            - Start your server with:
              ```bash
              node server.js
              ```

          6. **Test the integration**:
            - Open your website, fill out the form, and submit it. The content should be added to your MySQL database via the stored procedure.

          This setup allows you to dynamically add content to your website using Node.js, Express, and MySQL stored procedures.
        </pre>