import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="nx-font-semibold">JUCHUNKO</span>,
  project: {
    link: "https://github.com/maylogger/juchunko.com",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "©2024 JUCHUNKO Corp. All rights reserved.",
  },
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;
