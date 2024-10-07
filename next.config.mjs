/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "m.media-amazon.com",
   },
   {
    protocol: "https",
    hostname: "media3.audimo.com",
   }
  ]
 }
};

export default nextConfig;
