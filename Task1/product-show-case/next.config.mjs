/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.google.com', // Use the full hostname
        },
        
      ],
    },
  };
  
  export default nextConfig;
  