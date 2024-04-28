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
  }
};

export default nextConfig;
