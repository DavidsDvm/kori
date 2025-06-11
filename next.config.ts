import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    basePath: process.env.NODE_ENV === 'production' ? '/kori' : '',
};

export default nextConfig;