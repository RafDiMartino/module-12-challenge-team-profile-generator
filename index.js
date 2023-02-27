import { Manager } from "./lib/Manager.js";
import { Engineer } from "./lib/Engineer.js";
import { Intern } from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = path.resolve("output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

import { team } from "./src/page-template.js";


// TODO: Write Code to gather information about the development team members, and render the HTML file.
