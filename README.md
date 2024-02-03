# originless-cloudfront

https://qiita.com/watany/items/b86c2304832126de76e0

以上の記事を参考に、文中で言われる Originless な CloudFront を構築するためのあれこれを実装してみる。

## Lambda@Edge

Web フレームワーク `Hono` を利用して特定パスへのアクセス時に Lambda@Edge によってレスポンスを返す。

## CloudFront Functions (CF2)

一定確率で Sorry / Waiting サーバへリダイレクトさせる CloudFrontFunction を実装する。

リダイレクト先の URL は CloudFront Functions KeyValueStore (KVS) を利用する。

CloudFormation Template を利用して CF2 / CF2 KVS を管理 / ビルド / デプロイ を行う。

## Note

各アプリケーション用の Template 管理には AWS SAM を利用している。

## References

- https://qiita.com/watany/items/b86c2304832126de76e0

- https://hono.dev/

- https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-functionconfig
