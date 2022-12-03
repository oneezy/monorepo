import { svelteConfig } from '@packages/config';

const config = {
  ...svelteConfig,
  kit: {
    ...svelteConfig.kit,
    paths: {
        base: "/site",
    },
  }
};

export default config;