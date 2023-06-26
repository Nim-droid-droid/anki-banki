// * * * * * * * * * * * * * * * * * *
//Sing in with Twitter 
// * * * * * * * * * * * * * * * * * *

/**
 *  TO DO:
Step 1: Install passports Twitter package via npm
Step 2: import/add require to this file
Step 3:
*/
// Necessary?

const passport = require('passport');
// const refresh = require('passport-oauth2-refresh');
// const axios = require('axios');
// const { Strategy: LocalStrategy } = require('passport-local');
// const { OAuthStrategy } = require('passport-oauth');
// const { OAuth2Strategy } = require('passport-oauth');
// const _ = require('lodash');
// const moment = require('moment');

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// /**
//  * Sign in using Email and Password.
//  */
// passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//   User.findOne({ email: email.toLowerCase() }, (err, user) => {
//     if (err) { return done(err); }
//     if (!user) {
//       return done(null, false, { msg: `Email ${email} not found.` });
//     }
//     if (!user.password) {
//       return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' });
//     }
//     user.comparePassword(password, (err, isMatch) => {
//       if (err) { return done(err); }
//       if (isMatch) {
//         return done(null, user);
//       }
//       return done(null, false, { msg: 'Invalid email or password.' });
//     });
//   });
// }));
// /**
//  * OAuth Strategy Overview
//  *
//  * - User is already logged in.
//  *   - Check if there is an existing account with a provider id.
//  *     - If there is, return an error message. (Account merging not supported)
//  *     - Else link new OAuth account with currently logged-in user.
//  * - User is not logged in.
//  *   - Check if it's a returning user.
//  *     - If returning user, sign in and we are done.
//  *     - Else check if there is an existing account with user's email.
//  *       - If there is, return an error message.
//  *       - Else create a new account.
//  */
// // Necessary?


// const { Strategy: TwitterStrategy } = require('passport-twitter');

const TwitterStrategy  = require('passport-twitter').Strategy;

const User = require('../models/User');

/**
 * Sign in with Twitter.
 */
// passport.use(new TwitterStrategy({
//   consumerKey: process.env.TWITTER_KEY,
//   consumerSecret: process.env.TWITTER_SECRET,
//   callbackURL: `${process.env.BASE_URL}/auth/twitter/callback`,
//   passReqToCallback: true
// }, (req, accessToken, tokenSecret, profile, done) => {
//   if (req.user) {
//     User.findOne({ twitter: profile.id }, (err, existingUser) => {
//       if (err) { return done(err); }
//       if (existingUser) {
//         req.flash('errors', { msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
//         done(err);
//       } else {
//         User.findById(req.user.id, (err, user) => {
//           if (err) { return done(err); }
//           user.twitter = profile.id;
//           user.tokens.push({ kind: 'twitter', accessToken, tokenSecret });
//           user.profile.name = user.profile.name || profile.displayName;
//           user.profile.location = user.profile.location || profile._json.location;
//           user.profile.picture = user.profile.picture || profile._json.profile_image_url_https;
//           user.save((err) => {
//             if (err) { return done(err); }
//             req.flash('info', { msg: 'Twitter account has been linked.' });
//             done(err, user);
//           });
//         });
//       }
//     });
//       } else {
//     User.findOne({ twitter: profile.id }, (err, existingUser) => {
//       if (err) { return done(err); }
//       if (existingUser) {
//         return done(null, existingUser);
//       }
//       const user = new User();
//       // Twitter will not provide an email address.  Period.
//       // But a person’s twitter username is guaranteed to be unique
//       // so we can "fake" a twitter email address as follows:
//       user.email = `${profile.username}@twitter.com`;
//       user.twitter = profile.id;
//       user.tokens.push({ kind: 'twitter', accessToken, tokenSecret });
//       user.profile.name = profile.displayName;
//       user.profile.location = profile._json.location;
//       user.profile.picture = profile._json.profile_image_url_https;
//       user.save((err) => {
//         done(err, user);
//       });
//     });
//   }
// }));

module.exports = function(passport){
  passport.use( new TwitterStrategy({
    // use Twitter API to authenticate users on my app
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK_URL
  },   
  // function(token, tokenSecret, profile, cb) {
  //   User.findOrCreate({ twitterId: profile.id }, function (err, user) {
  //     return cb(err, user);
  //   });
  // }
   (token, tokenSecret, profile, done) => {
    // You can customize how you handle the user profile data here
    // The "profile" parameter contains the user information obtained from Twitter
    // You may want to store this information in your database or perform other operations
    return done(null, profile)
  }
  ));
  
  // Serialize user into the session
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  // Deserialize user from the session
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}
