import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname;

function manualChunks(id: string) {
	if (id.includes("@skyra/discord-components-react")) {
		return "discord";
	}

	if (id.includes("sonner")) {
		return "notifications";
	}

	return undefined;
}

// https://vite.dev/config/
export default defineConfig(() => ({
	base: "/",
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
				manualChunks,
			},
		},
	},
}));
