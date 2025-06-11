import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    basePath: process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? '/kori' : '',
};

export default nextConfig;