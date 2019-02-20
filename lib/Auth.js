import auth0 from 'auth0-js'
import Router from 'next/router'


export default class Auth {


  auth0 = new auth0.WebAuth({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    redirectUri: process.env.CALLBACK_URL,
    audience: process.env.AUDIENCE,
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  constructor () {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.redirectToPost = this.redirectToPost.bind(this)
    this.getAccessToken = this.getAccessToken.bind(this)
  }

  login () {
    this.auth0.authorize()
    localStorage.setItem('redirect_url', window.location.href)
  }

  logout () {
    localStorage.clear()
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No Access Token found')
    }
    return accessToken
  }

  redirectToPost () {
    Router.push(localStorage.getItem('redirect_url'))
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        console.log(err)
      }
    })
  }

  setSession(authResult) {

    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true')

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime()
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    localStorage.setItem('user_name', authResult.idTokenPayload.nickname)
    localStorage.setItem('user_picture', authResult.idTokenPayload.picture)
    this.redirectToPost()
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}