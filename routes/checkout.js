const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const express = require('express');
const app = express();
app.use(express.static('public'));
const router = express.Router();

app.post('/', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Price ID to be determined after creating it on dashboard
        price: 100,
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `/checkoutsuccess`,
    cancel_url: `/checkoutcancel`,
  });

  res.redirect(303, session.url)
});

module.exports = router;