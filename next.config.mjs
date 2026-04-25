// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   // Next 16.1.6 fails to apply the default `() => null` for this during
//   // `next build`, surfacing as `TypeError: generate is not a function`.
//   generateBuildId: () => null,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove this unless you REALLY need it
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  // Fix cross-origin warning (optional)
  allowedDevOrigins: ['http://10.11.228.185:3000'],

  // Remove this unless you have a strong reason
  // generateBuildId: () => null,
};

export default nextConfig;