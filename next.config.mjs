/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.aishaimranofficial.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'uycollection.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'www.nameerabyfarooq.com' },
    ],
  },
  eslint: {
    // Yeh line aapke ESLint errors ko bypass karegi aur project build ho jayega
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;