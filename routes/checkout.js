const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const express = require('express');
const app = express();
app.use(express.static('public'));
const router = express.Router();

let domain = "http://localhost:3000/"

async function getPrice(){
  const product = await stripe.products.create({name: 'experience'});

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 100,
    currency: 'usd',
  });

  return price
}

price = getPrice()

router.post('/', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Price ID to be determined after creating it on dashboard
        price: price.id,
        quantity: 1,
        currency: 'usd',
        amount: 100,
        name: "experience",
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: domain + `checkoutsuccess`,
    cancel_url: domain + `checkoutcancel`,
  });

  res.redirect(303, session.url)
});

module.exports = router;