/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{
            source: "/",
            destination: "/authentication",
            permanent: true,
        }];
    },
};

module.exports = nextConfig;
