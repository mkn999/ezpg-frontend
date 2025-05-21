/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true, // or false depending on your use-case
        },
      ];
    },
  };
  
  export default nextConfig;
  