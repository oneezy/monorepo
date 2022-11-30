import { svelteConfig } from '@packages/config';

const config = {
  ...svelteConfig,
  kit: {
      ...svelteConfig.kit,
      // alias: {
      //     ...svelteConfig.kit.alias, // if there are aliases in the base config
      //     $alias: "src/alias", // whatever
      // },
      paths: {
          base: "/docs",
      },
  }
};

export default config;