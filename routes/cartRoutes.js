const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// ADD to cart (POST /cart)
router.post('/', async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
      await cart.save();
    } else {
      cart = await Cart.create({ userId, items: [{ productId, quantity }] });
    }

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add to cart' });
  }
});

// UPDATE quantity (PUT /cart/:productId)
router.put('/:productId', async (req, res) => {
  try {
    const { userId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const item = cart.items.find(item => item.productId.toString() === req.params.productId);
    if (!item) return res.status(404).json({ message: 'Item not found in cart' });

    item.quantity = quantity;
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update cart' });
  }
});

// DELETE item from cart (DELETE /cart/:productId)
router.delete('/:productId', async (req, res) => {
  try {
    const { userId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId.toString() !== req.params.productId);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove item from cart' });
  }
});

module.exports = router;
