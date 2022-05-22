import { navbar } from 'vuepress-theme-hope';
import type { HopeThemeNavbarConfig } from "vuepress-theme-hope";
export const Navbar = navbar([
  // NavbarItem
  {
    text: 'Web',
    link: '/Web/',
    icon: "javascript",
    activeMatch: "^/Web/",
  },
  {
    text: 'MacOS',
    link: '/MacOS/Shortcuts',
    icon: "computer",
  },
  {
    text: 'Project',
    link: '/Project/',
    icon:'blog'
  }
])