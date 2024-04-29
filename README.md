# originless-cloudfront

https://qiita.com/watany/items/b86c2304832126de76e0

以上の記事を参考に、文中で言われる `Originless` な CloudFront を構築するためのあれこれを実装する。

## Requirements

開発に利用するツールは `asdf` で管理している。

## Lambda@Edge

Web フレームワーク `Hono` を利用して特定パスへのアクセス時に Lambda@Edge によってレスポンスを返す。

AWS SAM Template を利用して Lambda 関数と IAM Role を管理 / ビルド / デプロイ を行う。

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
