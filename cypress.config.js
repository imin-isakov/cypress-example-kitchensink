module.exports = {
  projectId: "3wyue1",
  e2e: {
    setupNodeEvents(on, config) {
      if (process.env.ENV === 'stage') {
        config.baseUrl = 'https://stage.developer.vizio.com'
        config.env.username = 'qa.stage@polar-bear.com'
      } else if (process.env.ENV === 'preprod') {
        config.baseUrl = 'https://preprod.developer.vizio.com'
        config.env.username = 'qa.prod@polarbear.com'
      } else if (process.env.ENV === 'prod') {
        config.baseUrl = 'https://developer.vizio.com'
        config.env.username = 'qa.prod@polarbear.com'
      }

      return config
    },
  },
}
