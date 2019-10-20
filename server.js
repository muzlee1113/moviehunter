// Require dependencies
const express     = require('express');
// const mongoose    = require('mongoose');
const logger      = require("morgan");
// const formData    = require('express-form-data');
const bodyParser  = require('body-parser');
// const passport    = require("passport");
// const session     = require("express-session");
// const cookieParser= require("cookie-parser");

// Initialize express
const app = express();

// Set port
const PORT = process.env.PORT || 3001;

// Serve static assets
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
};

// Connect to MongoDB
app.use(logger("dev"));
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/moviehunter",{ useNewUrlParser: true });
// mongoose.connection.once("open",function(){
//   console.log("conneciton has been made")
// }).on("error",function(err){
//   console.log("connection error: \n",err)
// });


// Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(session({ secret: "cats",
// saveUninitialized:false,
// resave:false }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(formData.parse());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// // Passport
// const passportRoute = require("./routes/auth")(passport);
// require("./passport")(passport);
// app.use('/auth', passportRoute);

// Routes
const routes = require('./routes');
app.use(routes);

// Listener
app.listen(PORT, function () {
    console.log(`API Server listening on PORT ${PORT}`)
});
