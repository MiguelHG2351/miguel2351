const { withAxiom } = require("next-axiom")

module.exports = withAxiom({
  // ... your existing config
  eslint: {
    ignoreDuringBuilds: true,
  },
})
