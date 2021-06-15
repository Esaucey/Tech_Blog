const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const homeRoute = require('./controllers/home');
const about = require('./controllers/about');
const app = express();
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);
app.use(about);


const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`app listening port ${PORT}`));

