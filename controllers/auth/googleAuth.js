const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const User = require('../../models/user');

module.exports = (passport) => {
    passport.serializeUser((user,done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
    
    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/redirect",
        //passReqToCallback: true
      },
      function(accessToken, refreshToken, profile, done) {
    
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return done(err, user);
        // });
        
        //console.log(profile);
        console.log(profile);

         User.findOneAndUpdate({email: profile._json.email},{googleId: profile.id})
        .then((currentUser) => {
            if(currentUser){
                console.log('Successfully updated');
            }
            else
            {
                new User({
                    name: profile.displayName,
                    email: profile._json.email,
                    googleId: profile.id
                })
                .save()
                .then((newUser) => {
                    console.log('new user created:'+ newUser);
                });
            }
        });

        
      }
    ));
}

