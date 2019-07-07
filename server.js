const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes/api/users");

const app = express();

// Body parser middleware set-up
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Add routes, both API and view
app.use(routes);

// MongoDB connection 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("Mongo successfully connected."))
    .catch((err) => console.log(err));

// Passport.js middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}!`));
