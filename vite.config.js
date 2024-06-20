import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "127.0.0.1", // Optional: Explicitly sets the host to IPv4 localhost
		port: 3000, // Sets the port to 3000
	},
});
