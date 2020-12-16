const auth = require('http-auth');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { check, validationResult } = require('express-validator');

const router = express.Router();
const Order = mongoose.model('Order');
const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});

router.get('/', (req, res) => {
  res.render('form', { title: 'Order form' });
});

router.post('/',
  [
    check('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    check('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const order = new Order(req.body);
      order.save()
        .then(() => { res.send('Thank you for your order!'); })
        .catch((err) => {
          console.log(err);
          res.send('Sorry! Something went wrong.');
        });
    } else {
      res.render('form', {
        title: 'Order form',
        errors: errors.array(),
        data: req.body,
      });
    }
  });

router.get('/orders', basic.check((req, res) => {
  Order.find()
    .then((orders) => {
      res.render('index', { title: 'Listing orderss', orders });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
}));

module.exports = router;

