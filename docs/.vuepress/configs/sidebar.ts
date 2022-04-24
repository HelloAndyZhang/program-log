import { defineSidebarConfig } from "vuepress-theme-hope";
export const Sidebar = defineSidebarConfig({
    '/Project/': [
        '/Project/README.md',
    ],
    '/FE/': [
        {
            text: '常用工具',
            prefix: "/FE/",
            icon: "tool",
            children: [
                'git.md',
                'npm.md',
                'web_workflow.v1.md',
            ],
            collapsable: true,
        },
        {
            text: 'React',
            prefix: "/FE/",
            icon: 'react',
            children: [
                'react.md',
            ],
            collapsable: true,
        },
        {
            text: 'Vue',
            prefix: "/FE/",
            icon: 'vue',
            children: [
                'vue.md',
            ],
            collapsable: true,
        },
        "/FE/mobile.md",
    ],
    '/MacOS/': [
        '/MacOS/mac_shortcuts.md',
        '/MacOS/terminal.md',
        // {
        //     text: '命令',
        //     icon: 'command',
        //     prefix: "/MacOS/",
        //     children: [

        //     ],
        // },
    ],
});