// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { protect } = require('./middleware/authMiddleware');

// Import Routes
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes'); // You’ll add this too

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/products', productRoutes);   // for product APIs
app.use('/cart', protect, cartRoutes);        // for cart APIs
app.use('/auth', authRoutes);         // for register/login

// Start Server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));

