import { defineNavbarConfig } from 'vuepress-theme-hope';
import type { HopeThemeNavbarConfig } from "vuepress-theme-hope";
export const Navbar = defineNavbarConfig([
  // NavbarItem
  {
    text: 'Web',
    link: '/Web/TypeScript/tsconfig配置.md',
    icon: "javascript",
    activeMatch: "^/Web/",
  },
  {
    text: 'MacOS',
    link: '/MacOS/terminal',
    icon: "computer",
  },
  {
    text: 'Project',
    link: '/Project/',
    icon:'blog'
  }
])