var express = require(`express`);
var exphbs = require(`express-handlebars`);
var bodyParser = require("body-parser");
var session = require('express-session');
var mongoose = require(`mongoose`);
var flash = require(`connect-flash`);
// Requiring passport as we've configured it in our app.
var passport = require("./config/passport");

var db = require(`./models`);

var app = express();
app.use(bodyParser.urlencoded({ extended: false })); //For body parser
app.use(bodyParser.json());

var PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URI,{ useNewUrlParser : true });

// Middleware for jujusoft
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`public`));

// Handlebars
app.engine(
    `handlebars`,
    exphbs({
        defaultLayout: `main`
    })
);
app.set(`view engine`, `handlebars`);

app.use(session({ secret: "keyboard cat", resave: true, saveUnitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Routes
require(`./config/index`)(app);

app.listen(PORT,() => {
    console.log(`==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.`)
});

module.exports = app;