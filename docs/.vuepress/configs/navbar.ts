import { defineNavbarConfig } from 'vuepress-theme-hope';
import type { HopeThemeNavbarConfig } from "vuepress-theme-hope";
export const Navbar = defineNavbarConfig([
  // NavbarItem
  {
    text: 'FE',
    link: '/FE/git.md',
    icon: "javascript",
    activeMatch: "^/FE/",
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