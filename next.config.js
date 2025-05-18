/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  experimental: {
    serverActions: false
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      dns: false,
      tls: false,
      'perf_hooks': false,
      async_hooks: false
    };
    // Handle Handlebars require.extensions warning
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/handlebars/,
      use: 'null-loader'
    });
    // Handle OpenTelemetry and Genkit dependencies
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@opentelemetry/api': false,
        '@opentelemetry/core': false,
        '@opentelemetry/sdk-trace-base': false,
        '@opentelemetry/sdk-trace-node': false,
        '@opentelemetry/exporter-jaeger': false
      };
    }
    return config;
  },
}

module.exports = nextConfig