import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@api": path.resolve(__dirname, "./src/api"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
		},
	},
	plugins: [react()],
});
