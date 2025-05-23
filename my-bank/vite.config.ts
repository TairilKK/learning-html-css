import { resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        onboarding: resolve(__dirname, "onboarding.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
        profile: resolve(__dirname, "profile.html"),
        services: resolve(__dirname, "services.html"),
        signin: resolve(__dirname, "signin.html"),
        transactions: resolve(__dirname, "transactions.html"),
      },
    },
  },
});
