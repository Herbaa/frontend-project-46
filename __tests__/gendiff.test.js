import fs from "fs";
import path from "path";
import { fileUrlToPath } from "url";

import gendiff from "../src/index.js";

const __filename = fileUrlToPath(import.meta.url);
const __dirname = path.dirname(__filename);