import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;