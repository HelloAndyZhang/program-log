---
lang: zh-CN
title: tsconfig配置
description: tsconfig配置的文档
---


#### tsconfig.json 配置
```ts
{
    "compilerOptions": {
        /**************基础配置**************/
        /**************基础配置**************/
        /**************基础配置**************/
        /* 开启增量编译：TS 编译器在第一次编译的时候，会生成一个存储编译信息的文件，下一次编译的时候，会根据这个文件进行增量的编译，以此提高 TS 的编译速度 */
        "incremental": true,
        /* 指定存储增量编译信息的文件位置 */
        "tsBuildInfoFile": "./",

        /* 打印诊断信息 */
        "diagnostics": true,
        /* 打印输出的文件 */
        "listEmittedFiles": true,
        /* 打印编译的文件（包括引用的声明文件）*/
        "listFiles": true,

        /* 指定 ECMAScript 的目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
        "target": "es5",
        /* 指定模块代码的生成方式: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
        "module": "commonjs",

        /* 指定要包含在编译中的库文件——引用类库——即申明文件，如果输出的模块方式是 es5，就会默认引入 "dom","es5","scripthost"  */
        /* 如果在 TS 中想要使用一些 ES6 以上版本的语法，就需要引入相关的类库 */
        "lib": [],

        /* 允许编译 JS 文件 */
        "allowJs": true,
        /* 检查 JS 文件*/
        "checkJs": true,

        /* 指定 JSX 代码生成的模式: 'preserve', 'react-native', or 'react'. */
        /* 'react' 模式下：TS 会直接把 jsx 编译成 js */
        /* 'preserve' 模式下：TS 不会把 jsx 编译成 js，会保留 jsx */
        "jsx": "preserve",


        /**************声明文件相关配置**************/
        /**************声明文件相关配置**************/
        /**************声明文件相关配置**************/

        /* 生成相应的类型声明文件 —— '.d.ts' */
        "declaration": true,
        /* 声明文件的输出路径 */
        "declarationDir": "./d",
        /* 只生成声明文件，不生成 JS */
        "emitDeclarationOnly": true,
        /* 声明文件目录，默认 node_modules/@types */
        "typeRoots": [],
        /* 要导入的声明文件包，默认导入上面声明文件目录下的所有声明文件 */
        "types": [],


        /* 将多个相互依赖的文件合并并且把编译后的内容输出到一个文件里
         * 可以用在产出 AMD 模块的场景中
         * "module":"amd" 时，当一个模块引入了另外一个模块，编译的时候会把这两个模块的编译结果合并到一个文件中
         */
        "outFile": "./",
        /* 指定编译文件的输出目录 */
        // "outDir": "./out",
        /* 指定输入文件的根目录，用于控制输出目录的结构 */
        "rootDir": "./",

        /* 启用项目编译 */
        "composite": true,

        /*  输出的时候移除注释 */
        "removeComments": true,

        /* 不输出文件 */
        "noEmit": true,
        /* 发生错误时不输出文件 */
        "noEmitOnError": true,

        /* 不生成 helper 函数，以前的话设置为 true 后，需要额外安装 ts-helpers */
        /* 类似于 babel ，会给每个文件都生成 helper 函数，会使得最终编译后的包的体积变大 */
        "noEmitHelpers": true,
        /* 现在可以通过 tslib（TS 内置的库）引入 helper 函数，！！！文件必须是模块 ！！！ */
        /* 编译后自动引入 var tslib_1 = require("tslib") */
        "importHelpers": true,

        /* 当目标是 ES5 或 ES3 的时候提供对 for-of、扩展运算符和解构赋值中对于迭代器的完整支持 */
        "downlevelIteration": true,

        /* 把每一个文件转译成一个单独的模块 */
        "isolatedModules": true,


        /**************严格检查配置**************/
        /**************严格检查配置**************/
        /**************严格检查配置**************/

        /* 开启所有的严格检查配置 */
        "strict": true,
        /* 不允许使用隐式的 any 类型 */
        "noImplicitAny": true,

        /* 不允许把 null、undefined 赋值给其他类型变量 */
        "strictNullChecks": true,

        /* 不允许函数参数双向协变 */
        "strictFunctionTypes": true,

        /* 使用 bind/call/apply 时，严格检查函数参数类型 */
        "strictBindCallApply": true,

        /* 类的实例属性必须初始化 */
        "strictPropertyInitialization": true,

        /* 不允许 this 有隐式的 any 类型，即 this 必须有明确的指向*/
        "noImplicitThis": true,

        /* 在严格模式下解析并且向每个源文件中注入 "use strict" */
        "alwaysStrict": true,

        /**************额外的语法检查配置，这种检查交给 eslint 就行，没必要配置**************/
        /**************额外的语法检查配置，这种检查交给 eslint 就行，没必要配置**************/
        /**************额外的语法检查配置，这种检查交给 eslint 就行，没必要配置**************/

        /* 有未使用到的本地变量时报错 */
        "noUnusedLocals": true,

        /* 有未使用到的函数参数时报错 */
        "noUnusedParameters": true,

        /* 每个分支都要有返回值 */
        "noImplicitReturns": true,

        /* 严格校验 switch-case 语法 */
        "noFallthroughCasesInSwitch": true,

        /**************模块解析配置**************/
        /**************模块解析配置**************/
        /**************模块解析配置**************/

        /* 指定模块的解析策略: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)*/
        /* 若未指定，那么在使用了 --module AMD | System | ES2015 时的默认值为 Classic，其它情况时则为 Node */
        "moduleResolution": "node",

        /* 在解析非绝对路径模块名的时候的基准路径 */
        "baseUrl": "./",

        /* 基于 'baseUrl' 的路径映射集合 */
        "paths": {},

        /* 将多个目录放在一个虚拟目录下，用于运行时 */
        /* 当自己编写的库和开发的代码都输出到一个目录下时，开发代码和库的位置不一样，开发代码引入库的路径就会不对 */
        "rootDirs": [],
        // "rootDirs": ["src","out"],

        /* 允许 export = xxx 导出 ，并使用 import xxx form "module-name" 导入*/
        "esModuleInterop": true,

        /* 当模块没有默认导出的时候，允许被别的模块默认导入，这个在代码执行的时候没有作用，只是在类型检查的时候生效 */
        "allowSyntheticDefaultImports": true,


        /* 不要 symlinks 解析的真正路径 */
        "preserveSymlinks": true,

        /* 允许在模块中以全局变量的方式访问 UMD 模块内容 */
        "allowUmdGlobalAccess": true,


        /************** Source Map 配置**************/
        /************** Source Map 配置**************/
        /************** Source Map 配置**************/

        /* 指定 ts 文件位置 */
        "sourceRoot": "",

        /* 指定 map 文件存放的位置 */
        "mapRoot": "",

        /* 生成目标文件的 sourceMap */
        "sourceMap": true,

        /* 将代码与sourcemaps生成到一个文件中，要求同时设置了--inlineSourceMap 或--sourceMap 属性*/
        "inlineSources": true,

        /* 生成目标文件的 inline sourceMap —— 源文件和 sourcemap 文件在同一文件中，而不是把 map 文件放在一个单独的文件里*/
        "inlineSourceMap": true,

        /* 生成声明文件的 sourceMap */
        "declarationMap": true,

        /************** 实验性的配置**************/
        /************** 实验性的配置**************/
        /************** 实验性的配置**************/

        /* 启用装饰器 */
        "experimentalDecorators": true,

        "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */


        /**************高级配置**************/
        /**************高级配置**************/
        /**************高级配置**************/

        /* 强制区分大小写 */
        "forceConsistentCasingInFileNames": true

}

    /* 指定需要编译的单个文件列表 */
    "files": [],

    /* 指定需要编译的文件/目录 */
    "include": [
    //    // 只写一个目录名等价于 "./src/**/*"
       "src"
     ]

    /* 需要排除的文件或目录 */
    "exclude": []

    /* 配置文件继承 */
    "extends": "./tsconfig.base.json"

}

```
