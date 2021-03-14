const withWPA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const settings = {
    env: {
    },
    devIndicators: {
      autoPrerender: false,
    },
    pwa: {
      dest: 'public',
    },
  };

const pwa = withWPA({
    pwa: {
        dest: 'public',
        runtimeCaching
    }
})

module.exports = process.env.PORT ? pwa : settings
