const runtimeCaching = require('next-pwa/cache')
const withWPA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: 'true',
    runtimeCaching,
})

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
})

module.exports = pwa
