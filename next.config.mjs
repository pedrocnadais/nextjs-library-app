/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    hostname: "m.media-amazon.com",
   },
   {
    hostname: "media3.audimo.com",
   }
  ]
 }
};

export default nextConfig;
