// next-i18next.config.js
import path from 'path';

const nextI18nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },
  localePath: path.resolve("./public/locales"),
  shallowRender: true,
};

export default nextI18nextConfig;