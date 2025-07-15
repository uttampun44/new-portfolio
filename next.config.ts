import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

   webpack: (config, _) => ({
      ...config,
      watchOptions:{
         ...config.watchOptions,
         poll: 1000,
         aggregateTimeout: 300,
      }
   }),
  eslint: {
      ignoreDuringBuilds: true,
  }
};

export default nextConfig;
