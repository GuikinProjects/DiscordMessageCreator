import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { resolve } from "path";

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname;

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
	base: command === "build" ? "/DiscordMessageCreator/" : "/",
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": resolve(projectRoot, "src"),
		},
	},
	optimizeDeps: {
		include: ["@skyra/discord-components-react", "sonner"],
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					discord: ["@skyra/discord-components-react"],
					notifications: ["sonner"],
				},
			},
		},
	},
}));
