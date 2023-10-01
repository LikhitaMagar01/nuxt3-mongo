// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
  },
});
