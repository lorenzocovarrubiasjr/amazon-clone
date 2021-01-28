const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_GaBPToPGbOfEkn3b7TOeBm3B");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello Witeout"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("This is query,: ", request.query);
  console.log("Payment request recieved Boom, for this amount, ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
