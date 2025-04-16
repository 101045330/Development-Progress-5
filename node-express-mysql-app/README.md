# Node Express MySQL App

This project is a Node.js and Express application that connects to a MySQL database to retrieve and display service data. The application is structured to provide a clean separation of concerns through the use of routes, controllers, and models.

## Project Structure

```
node-express-mysql-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes                # Contains route definitions
│   │   ├── services.js       # Routes for service data
│   │   └── display.js        # Routes for displaying service details
│   ├── controllers           # Contains request handling logic
│   │   ├── servicesController.js # Handles service-related requests
│   │   └── displayController.js  # Handles display-related requests
│   ├── models                # Contains database connection logic
│   │   └── db.js             # MySQL database connection
│   └── config                # Configuration files
│       └── dbConfig.js       # Database configuration settings
├── package.json              # NPM configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd node-express-mysql-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your database credentials:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. Access the application in your browser at `http://localhost:3000`.

## API Endpoints

- **GET /services**: Retrieve all services.
- **GET /display/:id**: Retrieve detailed information about a specific service by ID.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes. 

## License

This project is licensed under the MIT License.