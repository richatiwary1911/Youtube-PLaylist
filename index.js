const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('dotenv').config();

const auth = require('./router/authRoutes');
const viewsRoute = require('./router/views'); 

//DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log("Connected with database"))
.catch((err) => console.log(err));

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [process.env.COOKIE_KEY]
}))

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
require('./controllers/auth/googleAuth')(passport);

app.use(auth);
app.use(viewsRoute);

app.listen(process.env.PORT || 8000);















