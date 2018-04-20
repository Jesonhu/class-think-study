+ tsconfig.json配置
  + [中文配置说明: ](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
  + 配置解释

    ```
    // tsconfig.json指定了用来编译这个项目的根文件和编译选项
    {
      "compilerOptions": {                          // compilerOptions:编译选项,可以被忽略，这时编译器会使用默认值
        "allowSyntheticDefaultImports": true,       // 允许从没有设置默认导出的模块中默认导入。这并不影响代码的显示，仅为了类型检查。
        "baseUrl": "./src",                         // 解析非相对模块名的基准目录
        "emitDecoratorMetadata": true,              // 给源码里的装饰器声明加上设计类型元数据
        "experimentalDecorators": true,             // 启用实验性的ES装饰器
        "module": "commonjs",                       // 指定生成哪个模块系统代码
        "moduleResolution": "node",                 // 决定如何处理模块。或者是"Node"对于Node.js/io.js，或者是"Classic"（默认）
        "noEmitHelpers": true,                      // 不再输出文件中生成用户自定义的帮助函数代码，如__extends。
        "noImplicitAny": false,                     // 在表达式和声明上有隐含的any类型时报错
        "sourceMap": true,                          // 用于debug ,生成相应的.map文件
        "strictNullChecks": false,                  // 在严格的null检查模式下，null和undefined值不包含在任何类型里，只允许用它们自己和any来赋值（有个例外，undefined可以赋值到void）。
        "target": "es5",                            // 目标代码类型
        "paths": {},                                // 模块名到基于baseUrl的路径映射的列表
        "lib": [                                    // 编译过程中需要引入的库文件的列表
          "dom",
          "es6"
        ],
        "types": [                                  // 要包含的类型声明文件名列表；如果指定了types，只有被列出来的包才会被包含进来
          "hammerjs",
          "node",
          "source-map",
          "uglify-js",
          "webpack"
        ]
      },
      "exclude": [                                 // 如果"files"和"include"都没有被指定，编译器默认包含当前目录和子目录下所有的TypeScript文件（.ts, .d.ts 和 .tsx），排除在"exclude"里指定的文件。
        "node_modules",
        "dist"
      ],
      "awesomeTypescriptLoaderOptions": {          // Typescript加载选项
        "forkChecker": true,
        "useWebpackText": true
      },
      "compileOnSave": false,          
      "buildOnSave": false,            
      "atom": { "rewriteTsconfig": false }
    }
  ```

## 目录结构说明

```
├─Person.js             # '人'基类编译后的JS
├─Person.ts             # '人'基类
├─README.md             # 说明文件  
├─tsconfig.json         # TS配置文件
├─test                  # 测试目录 
|  ├─age.js             # 编译后的文件
|  ├─age.ts             # 测试年龄一些类是否符合预期 
|  ├─job.js             # 编译后的文件
|  └job.ts              # 测试'职业'是否符合预期
├─job                   # '职业'类文件夹
|  ├─Student.js         # '学生'类
|  └Student.ts          # '学生'类编译后的JS
├─age                   # '年龄'类文件夹
|  ├─Agedness.ts        # '老人'类编译后的JS  
|  ├─Childhood.ts       # '儿童'类
|  ├─Midlife.ts         # '中年'类
|  ├─Teenager.ts        # '青少年'类 
|  ├─Youth.js           # '青年' 
|  └Youth.ts            # '青年'类
```