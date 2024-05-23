/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... other Next.js configurations (if any)
  
    // Add the referrer policy configuration
    referrerPolicy: ['no-referrer-when-downgrade', 'strict-origin-when-cross-origin'],
  };
  
  export default nextConfig;
  
