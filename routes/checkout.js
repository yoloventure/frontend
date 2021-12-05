const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const express = require('express');
const app = express();
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

/*app.use(express.urlencoded({extended: true}));
app.use(express.json())
let multer = require('multer');
let upload = multer();
app.use(upload.array());*/
app.use(express.static('public'));

router.post('/', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Price ID to be determined after creating it on dashboard
        // price: price.id,
        quantity: 1,
        currency: 'usd',
        amount: req.body.price*100,
        name: req.body.name,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: domain + `checkoutsuccess`,
    cancel_url: domain + `checkoutcancel`,
  });
  
  res.json({"url":session.url})
});

module.exports = router;