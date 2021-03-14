const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const pwa = withPWA({
    pwa: {
        dest: 'public',
        runtimeCaching
    }
})

const settings = {
    redirects: async () => {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true
            }
        ]
    }
}

module.exports = process.env.PORT ? pwa : settings