require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const jwt = require("jsonwebtoken");
// const router = require("./routes");
const { Client, Webhook, resources } = require("coinbase-commerce-node");
const { Charge } = resources;
const coinbase = require("coinbase-commerce-node");
const Checkout = coinbase.resources.Checkout;
const coinbaseSecret = "85af2e4a-eb45-42b3-9d73-a0bba362604e";
const webhookSecret = "49398ca1-678e-40b5-8a24-70f29647d422";
const axios = require("axios");
Client.init(coinbaseSecret);
function rawBody(req, res, next) {
  req.setEncoding("utf8");

  var data = "";

  req.on("data", function (chunk) {
    data += chunk;
  });

  req.on("end", function () {
    req.rawBody = data;

    next();
  });
}
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());
app.use(rawBody);
// app.use("/", router);
mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  userUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to database");
});

app.post("/createCharge", async (req, res) => {
  try {
    const chargeData = {
      description: "Useless widget created by Fireship",
      local_price: {
        amount: 9.99,
        currency: "USD",
      },
      pricing_type: "fixed_price",
      metadata: {
        user: "jeffd23",
      },
    };
    const charge = await Charge.create(chargeData);
    console.log("this is chaaaaarge", charge);
    
  } catch (err) {
    res.send(err);
  }
});

app.post("/verify", function (request, response) {
  console.log("these are headers", request.headers);

  try {
    const event = Webhook.verifyEventBody(
      request.rawBody,
      request.headers["x-cc-webhook-signature"],
      webhookSecret
    );
    console.log("Successefergrthrthrh");

    console.log("===========", event);
  } catch (error) {
    console.log("Error occured", error.message);

    // return response.status(400).send("Webhook Error:" + error.message);
  }
  console.log("Success");

  response.status(200).send("Signed Webhook Received: ");
});

// app.post("/createCharge", async (req, res) => {
//   try {
//     const res = await axios.post("https://api.commerce.coinbase.com/charges");
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// });

app.listen(port, () => {
  console.log("listening on port 3001");
});
