/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL:"arotiana4612@gmail.com",
    EMAIL_PASS:"rrvpantoxzhjmpsk",
    NEXT_PUBLIC_SANITY_DATASET :"production",
    NEXT_PUBLIC_SANITY_PROJECT_ID:"4fc7tplb",
    NEXT_PUBLIC_BASE_URL: "http://localhost:3000/",
	},
  swcMinify: true, 
  images: {
    domains: ['cdn.sanity.io'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
