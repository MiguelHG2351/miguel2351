module.exports = {
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