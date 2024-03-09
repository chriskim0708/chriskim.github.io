/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "portfolio";

const nextConfig = {
  output: "export",
  basePath: !debug ? `/${repository}` : "/",
  assetPrefix: !debug ? `/${repository}/` : "",
};

export default nextConfig;
