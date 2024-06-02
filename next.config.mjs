/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "tony-is-looking-for-a-job.s3.us-east.cloud-object-storage.appdomain.cloud",
      },
    ],
  },
};

export default nextConfig;
