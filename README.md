# 🛒 ShoppyGlobe E-commerce Backend API

A complete backend project built using **Node.js, Express.js, MongoDB, and JWT authentication** for an e-commerce platform.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- ThunderClient for API Testing

---

## 📁 Folder Structure

shoppyglobe-backend/
│
├── models/ # Mongoose Models (Product, Cart, User)
├── routes/ # Express Routes
├── middleware/ # JWT Auth Middleware
├── controllers/ # (Optional) Logic separation
├── screenshots/ # ThunderClient API test results
├── .env # Environment variables
└── server.js # Entry point

---

## 🔐 Authentication

- `POST /auth/register` – Register user and return JWT
- `POST /auth/login` – Login and receive token

Use token in header:
```bash
Authorization: Bearer <your_token>
📦 Product APIs
GET /products – List all products

GET /products/:id – Get a single product

🛒 Cart APIs (Protected)
POST /cart – Add product to cart

PUT /cart/:productId – Update quantity

DELETE /cart/:productId – Remove product

📸 ThunderClient Testing
All routes tested with valid inputs & token-based headers.
Check /screenshots folder for results.

✅ How to Run
bash
npm install
npm run dev
Ensure MongoDB is running locally or use MongoDB Atlas and update .env.

👩🏻‍💻 Developed by
Mamta Prajapati – Full Stack Developer (Internshala Project)



🔗 **GitHub Repository Link**: [https://github.com/Mamta0303/shoppyglobe-backend](https://github.com/Mamta0303/shoppyglobe-backend)
