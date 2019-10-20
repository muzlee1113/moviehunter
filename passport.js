var LocalStrategy = require('passport-local').Strategy;
var db= require("./models");
var User=db.User;

module.exports=(passport)=>{
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        console.log(id)
        User.findById(id, function(err, user) {
          console.log(err)
          console.log(user)
          done(err, user);
        });
      });
    passport.use(new LocalStrategy({
        usernameField:"email",
        passwordField:"password"
        },
        function(email, password, done) {
        User.findOne({email:email})
        .then(function(data){
            console.log("hi from passport")
            if(data){
                var valid=data.comparePassword(password,data.password)
                if(valid){
                  console.log("valid")
                  done(null,data)
                }
                else{
                  console.log("not valid")
                  done(null,false)
                }
            }
            else{
              done(null,false)
            }
        })
        }
      ));
}