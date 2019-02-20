require ('dotenv').config()

module.exports = {
  'process.env.GRAPHQL_URL': process.env.GRAPHQL_URL,
  'process.env.DOMAIN': process.env.DOMAIN,
  'process.env.CLIENT_ID': process.env.CLIENT_ID,
  'process.env.CALLBACK_URL': process.env.CALLBACK_URL,
  'process.env.AUDIENCE': process.env.AUDIENCE
}

