import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as s,j as a,z as e}from"./app-lp0sOEvl.js";const t={},o=e(`<h4 id="tsconfig-json-配置" tabindex="-1"><a class="header-anchor" href="#tsconfig-json-配置"><span>tsconfig.json 配置</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**************基础配置**************/</span>
        <span class="token doc-comment comment">/**************基础配置**************/</span>
        <span class="token doc-comment comment">/**************基础配置**************/</span>
        <span class="token comment">/* 开启增量编译：TS 编译器在第一次编译的时候，会生成一个存储编译信息的文件，下一次编译的时候，会根据这个文件进行增量的编译，以此提高 TS 的编译速度 */</span>
        <span class="token string-property property">&quot;incremental&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* 指定存储增量编译信息的文件位置 */</span>
        <span class="token string-property property">&quot;tsBuildInfoFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* 打印诊断信息 */</span>
        <span class="token string-property property">&quot;diagnostics&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* 打印输出的文件 */</span>
        <span class="token string-property property">&quot;listEmittedFiles&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* 打印编译的文件（包括引用的声明文件）*/</span>
        <span class="token string-property property">&quot;listFiles&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 指定 ECMAScript 的目标版本: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, &#39;ES2018&#39;, &#39;ES2019&#39; or &#39;ESNEXT&#39;. */</span>
        <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* 指定模块代码的生成方式: &#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es2015&#39;, or &#39;ESNext&#39;. */</span>
        <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* 指定要包含在编译中的库文件——引用类库——即申明文件，如果输出的模块方式是 es5，就会默认引入 &quot;dom&quot;,&quot;es5&quot;,&quot;scripthost&quot;  */</span>
        <span class="token comment">/* 如果在 TS 中想要使用一些 ES6 以上版本的语法，就需要引入相关的类库 */</span>
        <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">/* 允许编译 JS 文件 */</span>
        <span class="token string-property property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* 检查 JS 文件*/</span>
        <span class="token string-property property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 指定 JSX 代码生成的模式: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;. */</span>
        <span class="token comment">/* &#39;react&#39; 模式下：TS 会直接把 jsx 编译成 js */</span>
        <span class="token comment">/* &#39;preserve&#39; 模式下：TS 不会把 jsx 编译成 js，会保留 jsx */</span>
        <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>


        <span class="token doc-comment comment">/**************声明文件相关配置**************/</span>
        <span class="token doc-comment comment">/**************声明文件相关配置**************/</span>
        <span class="token doc-comment comment">/**************声明文件相关配置**************/</span>

        <span class="token comment">/* 生成相应的类型声明文件 —— &#39;.d.ts&#39; */</span>
        <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* 声明文件的输出路径 */</span>
        <span class="token string-property property">&quot;declarationDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./d&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* 只生成声明文件，不生成 JS */</span>
        <span class="token string-property property">&quot;emitDeclarationOnly&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* 声明文件目录，默认 node_modules/@types */</span>
        <span class="token string-property property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">/* 要导入的声明文件包，默认导入上面声明文件目录下的所有声明文件 */</span>
        <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>


        <span class="token comment">/* 将多个相互依赖的文件合并并且把编译后的内容输出到一个文件里
         * 可以用在产出 AMD 模块的场景中
         * &quot;module&quot;:&quot;amd&quot; 时，当一个模块引入了另外一个模块，编译的时候会把这两个模块的编译结果合并到一个文件中
         */</span>
        <span class="token string-property property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* 指定编译文件的输出目录 */</span>
        <span class="token comment">// &quot;outDir&quot;: &quot;./out&quot;,</span>
        <span class="token comment">/* 指定输入文件的根目录，用于控制输出目录的结构 */</span>
        <span class="token string-property property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* 启用项目编译 */</span>
        <span class="token string-property property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/*  输出的时候移除注释 */</span>
        <span class="token string-property property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 不输出文件 */</span>
        <span class="token string-property property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* 发生错误时不输出文件 */</span>
        <span class="token string-property property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 不生成 helper 函数，以前的话设置为 true 后，需要额外安装 ts-helpers */</span>
        <span class="token comment">/* 类似于 babel ，会给每个文件都生成 helper 函数，会使得最终编译后的包的体积变大 */</span>
        <span class="token string-property property">&quot;noEmitHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* 现在可以通过 tslib（TS 内置的库）引入 helper 函数，！！！文件必须是模块 ！！！ */</span>
        <span class="token comment">/* 编译后自动引入 var tslib_1 = require(&quot;tslib&quot;) */</span>
        <span class="token string-property property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 当目标是 ES5 或 ES3 的时候提供对 for-of、扩展运算符和解构赋值中对于迭代器的完整支持 */</span>
        <span class="token string-property property">&quot;downlevelIteration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 把每一个文件转译成一个单独的模块 */</span>
        <span class="token string-property property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>


        <span class="token doc-comment comment">/**************严格检查配置**************/</span>
        <span class="token doc-comment comment">/**************严格检查配置**************/</span>
        <span class="token doc-comment comment">/**************严格检查配置**************/</span>

        <span class="token comment">/* 开启所有的严格检查配置 */</span>
        <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* 不允许使用隐式的 any 类型 */</span>
        <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 不允许把 null、undefined 赋值给其他类型变量 */</span>
        <span class="token string-property property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 不允许函数参数双向协变 */</span>
        <span class="token string-property property">&quot;strictFunctionTypes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 使用 bind/call/apply 时，严格检查函数参数类型 */</span>
        <span class="token string-property property">&quot;strictBindCallApply&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 类的实例属性必须初始化 */</span>
        <span class="token string-property property">&quot;strictPropertyInitialization&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 不允许 this 有隐式的 any 类型，即 this 必须有明确的指向*/</span>
        <span class="token string-property property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 在严格模式下解析并且向每个源文件中注入 &quot;use strict&quot; */</span>
        <span class="token string-property property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/**************额外的语法检查配置，这种检查交给 eslint 就行，没必要配置**************/</span>
        <span class="token doc-comment comment">/**************额外的语法检查配置，这种检查交给 eslint 就行，没必要配置**************/</span>
        <span class="token doc-comment comment">/**************额外的语法检查配置，这种检查交给 eslint 就行，没必要配置**************/</span>

        <span class="token comment">/* 有未使用到的本地变量时报错 */</span>
        <span class="token string-property property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 有未使用到的函数参数时报错 */</span>
        <span class="token string-property property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 每个分支都要有返回值 */</span>
        <span class="token string-property property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 严格校验 switch-case 语法 */</span>
        <span class="token string-property property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/**************模块解析配置**************/</span>
        <span class="token doc-comment comment">/**************模块解析配置**************/</span>
        <span class="token doc-comment comment">/**************模块解析配置**************/</span>

        <span class="token comment">/* 指定模块的解析策略: &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6)*/</span>
        <span class="token comment">/* 若未指定，那么在使用了 --module AMD | System | ES2015 时的默认值为 Classic，其它情况时则为 Node */</span>
        <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* 在解析非绝对路径模块名的时候的基准路径 */</span>
        <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* 基于 &#39;baseUrl&#39; 的路径映射集合 */</span>
        <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">/* 将多个目录放在一个虚拟目录下，用于运行时 */</span>
        <span class="token comment">/* 当自己编写的库和开发的代码都输出到一个目录下时，开发代码和库的位置不一样，开发代码引入库的路径就会不对 */</span>
        <span class="token string-property property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;rootDirs&quot;: [&quot;src&quot;,&quot;out&quot;],</span>

        <span class="token comment">/* 允许 export = xxx 导出 ，并使用 import xxx form &quot;module-name&quot; 导入*/</span>
        <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 当模块没有默认导出的时候，允许被别的模块默认导入，这个在代码执行的时候没有作用，只是在类型检查的时候生效 */</span>
        <span class="token string-property property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>


        <span class="token comment">/* 不要 symlinks 解析的真正路径 */</span>
        <span class="token string-property property">&quot;preserveSymlinks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 允许在模块中以全局变量的方式访问 UMD 模块内容 */</span>
        <span class="token string-property property">&quot;allowUmdGlobalAccess&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>


        <span class="token doc-comment comment">/************** Source Map 配置**************/</span>
        <span class="token doc-comment comment">/************** Source Map 配置**************/</span>
        <span class="token doc-comment comment">/************** Source Map 配置**************/</span>

        <span class="token comment">/* 指定 ts 文件位置 */</span>
        <span class="token string-property property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* 指定 map 文件存放的位置 */</span>
        <span class="token string-property property">&quot;mapRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* 生成目标文件的 sourceMap */</span>
        <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 将代码与sourcemaps生成到一个文件中，要求同时设置了--inlineSourceMap 或--sourceMap 属性*/</span>
        <span class="token string-property property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 生成目标文件的 inline sourceMap —— 源文件和 sourcemap 文件在同一文件中，而不是把 map 文件放在一个单独的文件里*/</span>
        <span class="token string-property property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* 生成声明文件的 sourceMap */</span>
        <span class="token string-property property">&quot;declarationMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/************** 实验性的配置**************/</span>
        <span class="token doc-comment comment">/************** 实验性的配置**************/</span>
        <span class="token doc-comment comment">/************** 实验性的配置**************/</span>

        <span class="token comment">/* 启用装饰器 */</span>
        <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token string-property property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>         <span class="token comment">/* Enables experimental support for emitting type metadata for decorators. */</span>


        <span class="token doc-comment comment">/**************高级配置**************/</span>
        <span class="token doc-comment comment">/**************高级配置**************/</span>
        <span class="token doc-comment comment">/**************高级配置**************/</span>

        <span class="token comment">/* 强制区分大小写 */</span>
        <span class="token string-property property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>

<span class="token punctuation">}</span>

    <span class="token comment">/* 指定需要编译的单个文件列表 */</span>
    <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">/* 指定需要编译的文件/目录 */</span>
    <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//    // 只写一个目录名等价于 &quot;./src/**/*&quot;</span>
       <span class="token string">&quot;src&quot;</span>
     <span class="token punctuation">]</span>

    <span class="token comment">/* 需要排除的文件或目录 */</span>
    <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">/* 配置文件继承 */</span>
    <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./tsconfig.base.json&quot;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function i(l,c){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","tsconfig配置.html.vue"]]),m=JSON.parse('{"path":"/Web/TypeScript/tsconfig%E9%85%8D%E7%BD%AE.html","title":"tsconfig配置","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"tsconfig配置","description":"tsconfig配置的文档","head":[["meta",{"property":"og:url","content":"https://tgy.ink/Web/TypeScript/tsconfig%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"tsconfig配置"}],["meta",{"property":"og:description","content":"tsconfig配置的文档"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tsconfig配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":5.68,"words":1705},"filePathRelative":"Web/TypeScript/tsconfig配置.md","localizedDate":"2022年11月3日"}');export{d as comp,m as data};
