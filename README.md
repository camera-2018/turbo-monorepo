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

提交之前运行一次以下代码lint以下防止commit被拦住

```bash
npx turbo lint:fix
```
