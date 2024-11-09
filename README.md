# 1. 環境構築
## 1-1. Node.jsをインストール
https://nodejs.org/en/ <br>

・バージョン確認
~~~
node -v
~~~

## 1-2. package.jsonを生成
JSプロジェクトの依存関係を記録する役割。<br>
ビルドを含めたNode.jsを使った機能を使うために必要。
~~~
npm init --yes
~~~

## 1-3. TypeScriptをインストール
npmを使ってTypeScriptをインストールする。
~~~
npm install --save-dev typescript @types/node
~~~
・オプション<br>
--save-dev <br>
⇒devDependencies（実行環境ではなく、ビルドや開発時に必要なパッケージ）である。<br>
typescript @types/node<br>
⇒インストールするパッケージ。今回はTypeScriptと@types/node。<br>

## 1-4. tsconfig.jsonを生成
tsconfigを生成。TypeScriptコンパイラに対する設定ファイル。<br>
生成後に内容を書き換えることでオプションの変更が可能。
~~~
npx tsc --init
~~~
以下の部分を変更。
~~~
// コンパイラオプション
"comlilerOptions": {
  // トランスパイラのバージョン
  "target": "ES2023",
  // モジュールの設定
  "module": "ESNext",
  // npmでインストールしたモジュールをTypeScriptが認識するように設定
  "moduleResolution": "node", 
  // コンパイルの出力先  
  "outDir": "./dist"           
},
// コンパイルディレクトリの指定
"include": ["./src/**/*.ts"]
~~~

## 1-5. コンパイル
node_modulesにインストールされたtscを引数なしで実行する。
tsconfig.jsonを読み込んでコンパイルが行われる。
~~~
npx tsc
~~~
