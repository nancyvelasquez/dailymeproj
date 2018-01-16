const passport = require('passport')
const router = require('express').Router()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {
  User
} = require('../db/models')
module.exports = router

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {

  console.log('Google client ID / secret not found. Skipping Google OAuth.')

} else {

  const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }

  const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
    const googleId = profile.id
    const firstName = profile.name.givenName;
    const lastName = profile.name.familyName;
    const email = profile.emails[0].value
    const photo = profile._json.image && profile._json.image.url || profile._json.picture

    console.log('I am in Google')

    User.find({
        where: {
          email
        }
      })
      .then(foundUser => (!foundUser ?
        User.create({
          firstName,
          lastName,
          email,
          googleId, 
          photo
        })
        .then(createdUser => done(null, createdUser)) :
        !foundUser.googleId ?
        User.update({
          googleId,          
          firstName: foundUser.firstName || profile.name.givenName,
          lastName: foundUser.lastName || profile.name.familyName,
          photo: foundUser.photo || null,
        }, {
          where: { id: foundUser.id },
          returning: true
        })
        .spread((rowCount, updatedUser) => updatedUser[0]) :
        done(null, foundUser)
      ))
      .catch(done)
  })
  
  passport.use(strategy)

  router.get('/', passport.authenticate('google', {
    scope: 'email'
  }))

  router.get('/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
  }))

}