import path from "path";
import { fileURLToPath } from "url";
const url = fileURLToPath(import.meta.url);

export const file = path.dirname(url);

export const PORT = 8080;
