import { resolve } from "path";

export default {
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.js"),
            name: "simpleslider",
            fileName: (format, name) => {
                if (format === "es") {
                    return `${name}.js`;
                }
                return `${name}.${format}.js`;
            },
        }
    }
}