import { Context } from '@nuxt/types/app';

export default async (context: Context) => {
  console.log('>>>>>>>> test plugin', context);
  await Promise.resolve(true);
};
