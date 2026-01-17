/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'i.ibb.co.com', 
      'i.pravatar.cc'],
  },
};

export default nextConfig;
