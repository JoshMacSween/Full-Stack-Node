const express = require('express')
const passport = require('passport')
const Strategy = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

const sessionSecret = process.env.SESSION_SECRET || 'mark it zero'
const adminPassword = process.env.ADMIN_PASSWORD || 'iamthewalrus'

passport.use(
  new Strategy(function (username, password, cb) {
    const isAdmin = username === 'admin' && password === adminPassword
    if (isAdmin) cb(null, { username: 'admin'})

    cb(null, false)
  })
)

passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((user, cb) => cb(null, user))