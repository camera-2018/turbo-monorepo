# monorepo by turbo

如何使用

## 安装

```bash
yarn
```

```bash
npx turbo login
```

登录你的 vercel 账号

```bash
npx turbo link
```

连接上 vercel 缓存

## 运行

```bash
npx turbo deploy
```

这会运行"build", "test", "lint"三个命令

或者单独运行`npx turbo build`

## 本地开发

```bash
npx turbo dev
```

提交之前运行一次以下代码 lint 以下防止 commit 被拦住

```bash
npx turbo lint:fix
```

[commit lint 规则](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)

```bash
commit的模板：
type(scope): subject

type为commit的类型，本仓库的commit类型仅支持如下：
    feat: 新特性
    fix: 修改问题
    refactor: 代码重构
    docs: 文档修改
    style: 代码格式修改
    test: 测试用例修改
    chore: 其他修改, 比如构建流程, 依赖管理.
    pref: 性能提升的修改
    ci: CI 的修改
    revert: revert 前一个 commit （ 撤销前一个commit ）
    vercel: vercel 部署相关的修改

scope是文件名/模块名/影响的范围
    例如 Button

subject为commit概述
    建议符合 50/72 formatting

例  feat(component): add success submit tips

注意 冒号和subject之间要加空格
```

[monorepo 框架 turbo](https://turbo.build/repo/docs)
