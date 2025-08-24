import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

// This line initializes the next-pwa plugin.
// `dest: 'public'` tells it to put the generated PWA files (like the service worker)
// into the `public` folder of your Next.js application.
const withPWA = withPWAInit({
  dest: 'public' // Destination directory for PWA files
})

// This is your standard Next.js configuration.
const nextConfig = {
  reactStrictMode: true, // Helps catch potential problems in your app during development
  images: {
    // This specifies which domains Next.js is allowed to load images from.
    // 'm.media-amazon.com' is likely where your movie poster images come from.
    domains: ['m.media-amazon.com'],
  },
  // We can add other Next.js specific configurations here as needed.
};

// Finally, we wrap our `nextConfig` with the `withPWA` function.
// This tells Next.js to apply the PWA capabilities to our existing configuration.
export default withPWA({
  ...nextConfig // This spreads all the properties from `nextConfig` into the PWA wrapper.
})
