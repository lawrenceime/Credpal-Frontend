/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)', // This applies the header to all routes
                headers: [
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin', // Set the referrer policy you need
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
