import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Craft233",
  description: "Craft233的文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
