module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'http://923039-cs31212.tmweb.ru:8000/api/v1/:path*',
      }
    ]
  }
}
