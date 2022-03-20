import "./src/styles/global.css";

import React from "react";
import { MDXProvider } from "@mdx-js/react";

const wrapRootElement = ({ element }) => <MDXProvider>{element}</MDXProvider>;

export { wrapRootElement };
