const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/personal-website' : '',
  assetPrefix: isProd ? '/personal-website/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
