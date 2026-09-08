import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  	plugins: [vue(), svgLoader()],
  	server: {
    	host: "127.0.0.1",
    	port: 3000
  	}
});