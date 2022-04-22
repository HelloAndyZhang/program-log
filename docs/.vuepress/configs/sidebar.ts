import type { SidebarConfig } from '@vuepress/theme-default'

export const Sidebar: SidebarConfig = {
    '/Project/':[
        '/Project/README.md',
    ],
    '/FE/': [
        {
            text: '常用工具',
            children: [
                '/FE/git.md',
                '/FE/npm.md',
                '/FE/web_workflow.v1.md',
            ],   
            collapsible: true, 
        },
        {
            text: 'React',
            children: [
                '/FE/react.md',
            ], 
            collapsible: true,    
        },
        {
            text: 'Vue',
            children: [
                '/FE/vue.md',
            ],    
            collapsible: true, 
        },
    ],
    '/MacOS/': [
        '/MacOS/mac_shortcuts.md',
        '/MacOS/README.md',
        // {
        //     text: '命令',
        //     children: [

        //     ],
        // },
    ],
}