import type { SidebarConfig } from '@vuepress/theme-default'

export const Sidebar: SidebarConfig = {
    '/FE/': [
        {
            text: '前端',
            children: [
                '/FE/git.md',
                '/FE/npm.md',
                '/FE/前端技术方案模板.md',
                '/FE/web_workflow.v1.md',
            ],
        },
    ],
    '/MacOS/': [
        {
            text: 'MacOS',
            children: [
                '/MacOS/mac_shortcuts.md',
            ],
        },
    ],
}