import { sidebar } from 'vuepress-theme-hope';
export const Sidebar = sidebar({
    '/Project/': [
        '/Project/README.md',
        '/Project/Workflow.v1.md',
    ],
    '/Web/': [
        {
            text: 'TypeScript',
            prefix: "/Web/TypeScript/",
            icon: 'typescript',
            children: [
                'tsconfig配置.md',
                '工具函数.md',
            ],
            collapsable: true,
        },
        {
            text: 'JavaScript',
            prefix: "/Web/JavaScript/",
            icon: 'javascript',
            children: [
                '常用函数.md',
                '数组技巧.md',
            ],
            collapsable: true,
        },
        {
            text: '框架',
            prefix: "/Web/Framework/",
            icon: 'frame',
            children: [
                'React.md',
                'Vue.md',
            ],
            collapsable: true,
        },
        {
            text: '工具',
            prefix: "/Web/Tools/",
            icon: "tool",
            children: [
                'Git.md',
                'NPM.md',
            ],
            collapsable: true,
        },
        {
            text: 'HTML',
            prefix: "/Web/HTML/",
            icon: 'html',
            children: [
                'meta模板.md',
            ],
            collapsable: true,
        },
        {
            text: 'CSS',
            prefix: "/Web/CSS/",
            icon: 'css',
            children: [
                '1px边框.md',
                '网站变灰.md',
                "文本溢出.md",
                "重置滚动条.md",
                '样式兼容.md',
                '常用样式.md',
            ],
            collapsable: true,
        },

        {
            text: 'Debug',
            prefix: "/Web/Debug/",
            icon: 'launch',
            children: [
                'chrome调试.md',
            ],
            collapsable: true,
        },
        {
            text: '移动端',
            prefix: "/Web/Mobile/",
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
        "zshrc区别.md",
        // {
        //     text: '命令',
        //     icon: 'command',
        //     prefix: "/MacOS/",
        //     children: [

        //     ],
        // },
    ],
});