const withWPA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

// const settings = {
//     env: {
//     },
//     devIndicators: {
//       autoPrerender: false,
//     },
//     pwa: {
//       dest: 'public',
//     },
//   };

const pwa = withWPA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        register: 'true',
        runtimeCaching,
        
    }
})

module.exports = pwa
