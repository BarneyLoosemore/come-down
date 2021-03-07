module.exports = {
  images: {
    domains: ["images.prismic.io"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages/49",
        permanent: true,
      },
    ]
  },
}
