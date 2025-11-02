/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/contacts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
