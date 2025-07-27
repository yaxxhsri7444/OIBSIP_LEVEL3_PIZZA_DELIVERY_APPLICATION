# 🍕 Pizza Delivery App

This is a fully functional Pizza Delivery Application developed as a part of the **Oasis Infobyte Internship (OIBSIP - Level 3)**. The app allows users to place pizza orders, view menus, track orders, and manage admin tasks in a real-world simulated delivery platform.This is a fully functional Pizza Delivery Application developed as a part of the **Oasis Infobyte Internship (OIBSIP - Level 3)**. The app allows users to place pizza orders, view menus, track orders, and manage admin tasks in a real-world simulated delivery platform.



## 📦 Features

### 👤 User
- Register & Login with JWT authentication
- Browse pizza menu
- Customize and build your own pizza
- Place orders and view order history

### 🛠️ Admin
- View all orders and update their status
- Track low-stock ingredients
- Manage inventory (ingredients)
- Add new pizzas

## 🧱 Tech Stack

- | Layer       | Technology     |
- |-------------|----------------|
- | Frontend    | Angular 19     |
- | Backend     | Node.js + Express.js |
- | Database    | MongoDB        |
- | Auth        | JWT            |
- | Styling     | Tailwind      |

### Prerequisites
- Node.js (v18+ recommended)
- Angular CLI
- MongoDB (local or cloud)
- `npm` package manager

### 📁 Folder Structure

- pizza-delivery-app/
- ├── backend/ # Node.js + Express API
- │ ├── controllers/
- │ ├── models/
- │ ├── routes/
- │ └── server.js
- ├── frontend/ # Angular application
- │ ├── src/
- │ │ ├── app/
- │ │ │ ├── components/
- │ │ │ ├── services/
- │ │ │ └── ...
- │ └── angular.json
- └── .env


###  Testing
- You can use Postman or frontend integration to test all features.
- Ensure that JWT is sent in headers for protected routes.

###  Future Improvements
- Payment integration
- Email notifications
- Real-time order tracking (socket.io)
- Delivery partner module

### Author
- Saksham Srivastava
- 📧 srivastavasaksham243@gmail.com
- 🌐 GitHub | LinkedIn

### 📃 License
- This project is licensed under the MIT License.


