const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HxMHvGo7t6342j7LGk8ZujuSeM90QaaveZc2FPo361DEFUKJSfM9mT1o7kZoHPbAMneSm0Tx7cOWmBWF9sryE9800MmmyjgfQ');

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received for this amount', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "gbp"
    });

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);
