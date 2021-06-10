module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'access-control-allow-origin',
            value: 'null',
          },
        ],
      },
    ]
  },
}