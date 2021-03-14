const withPWA = require('next-pwa')
const runtimeCache = require('next-pwa/cache')

const pwa = withPWA({
    pwa: {
        dest: 'public',
        runtimeCache
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