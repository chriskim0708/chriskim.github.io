/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "portfolio";

const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
};

export default nextConfig;
