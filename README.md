# WEBサイトのテスト

cloudflare+dockerでWEBサイトの構築するためのソースコード。

具体的な方法は、[余ってるPCをWEBサーバーにする方法【自宅WEBサーバーをつくる】](https://toaruk.com/blog/自宅webサーバー)をご覧ください。

cloudflare tokenを記入した後にgitを使うなら、.gitignore内の.envのコメントアウトを解除してください。システム漏洩などに繋がる可能性があります。

## コマンド操作

サーバーを起動するには、
```bash
docker-compose up -d
```

停止するには、
```bash
docker-compose down
```
