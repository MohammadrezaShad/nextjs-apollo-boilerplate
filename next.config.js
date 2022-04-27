/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {i18n} = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.ts?$/,
      loader: 'stylelint-custom-processor-loader',
      exclude: /node_modules/,
    });
    return config;
  },
};

module.exports = nextConfig;
