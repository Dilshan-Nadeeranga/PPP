/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lets a test build go to another folder (NEXT_DIST_DIR=.next-check) without disturbing a running `next dev`
  distDir: process.env.NEXT_DIST_DIR || '.next',
}

module.exports = nextConfig
