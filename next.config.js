/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        // avatars.githubusercontent.com
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '', 
      },{
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      }
    ]
  }, 
}

const withVercelToolbar = require('@vercel/toolbar/plugins/next')();
// Instead of module.exports = nextConfig, do this:
module.exports = withVercelToolbar(nextConfig);