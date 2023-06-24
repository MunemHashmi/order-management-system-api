# Order Management System

## Description

Order Management System is a backend API for managing orders, products, and users in an e-commerce application. It is built with Express.js and uses MongoDB as the database. The API includes authentication functionality using bcrypt for password hashing and JSON Web Tokens (JWT) for user login and authorization.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. The API will be accessible at `http://localhost:3000`

## API Endpoints

- **Orders**
  - `GET /orders` - Get all orders
  - `GET /orders/:id` - Get a specific order
  - `POST /orders` - Create a new order
  - `PUT /orders/:id` - Update an existing order
  - `DELETE /orders/:id` - Delete an order

- **Products**
  - `GET /products` - Get all products
  - `GET /products/:id` - Get a specific product
  - `POST /products` - Create a new product
  - `PUT /products/:id` - Update an existing product
  - `DELETE /products/:id` - Delete a product

- **Users**
  - `GET /users` - Get all users
  - `GET /users/:id` - Get a specific user
  - `POST /users` - Create a new user
  - `PUT /users/:id` - Update an existing user
  - `DELETE /users/:id` - Delete a user
  - `POST /users/login` - User login

## Authentication

The API includes authentication functionality using JSON Web Tokens (JWT). To access protected routes, the client needs to include a valid JWT token in the `Authorization` header of the HTTP request.

### Obtaining a JWT Token

To obtain a JWT token, the client needs to make a POST request to `/users/login` with valid credentials (email and password) in the request body. If the credentials are valid, the server will respond with a JWT token.

### Protected Routes

Protected routes require the client to include the JWT token in the `Authorization` header of the HTTP request in the following format: `Bearer <token>`. The server will verify the token and grant access to the protected route if the token is valid.

## Configuration

- The API uses a MongoDB database. Make sure you have MongoDB installed and running locally.
- Set the following environment variables:
  - `MONGODB_URI`: The connection URL for the MongoDB database.
  - `JWT_SECRET`: The secret key used for JWT token generation and verification.

## Dependencies

- bcrypt: ^5.1.0
- express: ^4.18.2
- jsonwebtoken: ^9.0.0
- mongoose: ^7.3.0

## Contributing

Contributions to this project are welcome. Feel free to open issues and submit pull requests.

## License

This project is licensed under the [ISC License](LICENSE).
