const mongoose = require('mongoose');
const Product = require('./models/Product');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connected.');

  await Product.deleteMany();

  const products = [
    {
      name: 'T-Shirt',
      price: 499,
      description: 'Cool cotton T-shirt',
      stock: 30
    },
    {
      name: 'Shoes',
      price: 1499,
      description: 'Running shoes',
      stock: 15
    }
  ];

  await Product.insertMany(products);
  console.log('Sample products inserted!');
  process.exit();
})
.catch((err) => {
  console.log(err);
  process.exit(1);
});
