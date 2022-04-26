import { defineSidebarConfig } from "vuepress-theme-hope";
export const Sidebar = defineSidebarConfig({
    '/Project/': [
        '/Project/README.md',
        '/Project/Workflow.v1.md',
    ],
    '/FE/': [
        {
            text: '工具',
            prefix: "/FE/Tools/",
            icon: "tool",
            children: [
                'Git.md',
                'NPM.md',
            ],
            collapsable: true,
        },
        {
            text: '框架',
            prefix: "/FE/Framework/",
            icon: 'frame',
            children: [
                'React.md',
                'Vue.md',
            ],
            collapsable: true,
        },
        {
            text: 'HCJ',
            prefix: "/FE/HCJ/",
            icon: 'launch',
            children: [
                'CSS.md',
                'HTML.md',
                "JavaScript.md",
                "TypeScript.md",
            ],
            collapsable: true,
        },
        {
            text: '移动端',
            prefix: "/FE/Mobile/",
            icon: 'mobile',
            children: [
                'MiniProgram.md',
                "Mobile.md",
            ],
            collapsable: true,
        }, 
    ],
    '/MacOS/': [
        '/MacOS/Shortcuts.md',
        '/MacOS/Terminal.md',
        // {
        //     text: '命令',
        //     icon: 'command',
        //     prefix: "/MacOS/",
        //     children: [

        //     ],
        // },
    ],
});