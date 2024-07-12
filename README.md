# 1cw_sk-vite
- これは静的サイト用Vite環境です
- sass関数使用例はsrc > scss > object > project > _p-sass-function.scss
- 開発環境で起動する場合、ファイルは出力されません（ゆえに速度が速い）
- vite.config.jsのportで任意のポート番号を指定できます
  - 必要ない場合は削除してください
- special thanks!! サカタさん[@sakata_web](https://mobile.twitter.com/sakata_web)<br>
  [【コーダー向け】ViteでHTML（ejsライク）・Sass・JSな普通のコーディング環境を作ってみた](https://zenn.dev/sakata_kazuma/articles/59a741489c8bbc)

# COMMAND
- `npm run dev`で開発環境起動
  - ターミナルに表示される`> Local: http://localhost:****/`をcommand押しながらクリックしてください（自動で開きません）
- `npm run build`でdistフォルダ作成（提出用ファイル）
- `npm run build:terser`で<br />や<img />のスラッシュを取り除いた後distフォルダ作成（提出用ファイル）
- ** package.jsonを参照すること **

# 注意点
- 開発フォルダはsrcです
- `<link rel="stylesheet" href="./scss/style.scss" />`のように直接scssを指定してください
- publicフォルダ内のファイルは変換されず、そのままdistフォルダにコピーされます
- `src/public/assets/js/`にjsファイルがない場合は<font color="Red">package.json > scripts > build の`&& esbuild`以降を削除すること</font>
- htmlを新規作成した場合はvite.config.js > defineConfig > build > input に追記すること<br>
例：hoge.htmlを作成した場合
`hoge: resolve(__dirname, './src/hoge.html'),`

# 画像に関して（imgタグ, backgroundプロパティ）
- scssでbackgroundを指定する場合
    - `background-image: url('../../assets/images/hoge.jpg');` のようにpublicは省略する
- imgタグで指定する場合
    - `<img src="./assets/images/hoge.jpg" alt="">` のようにpublicは省略する

# JSについて
- `<script type="module" src="./js/main.js"></script>`は必ず記載してください
- main.jsのtype="module"は外すことはできません
- main.jsは出力後head内に記載されるが問題ありません（type="module"はdeferと同様の処理がされます）
- main.jsの名称を変更した際は、必ずvita.config.jsで設定を変更してください
- publicフォルダ内のJSについて
    - type属性を書かずに通常の方法で記述してください
    - publicフォルダ内のJSを読み込む際は`<script src="./assets/js/hige.js"></script>`のようにpublicは省略する
    
# meta
- metaの中身はmeta.jsonで管理しています
- ページが増えた場合は、適宜meta.jsonの中身とページ内の変数を変えてください

# 画像圧縮
- viteImageminで実行させてます

# 変数の記述方法
- 基本的にhandlebarsの記述方法で行うこと 例：`{{hoge}}`
- includeとhtml内で定義した変数のみEJSが使用可能 例：`<%= hoge %>`
- 外部JSONファイルは以下の通りで読み込む
  1. `const fs = require('fs');`を必ず記述
  2. `var data = JSON.parse(fs.readFileSync('./src/json/data.json', 'utf8'));`のように読み込みの記述を行うこと
  3. pluginsのhandlebars内で指定すること
  例：`data:data` 【htmlに渡す名前】:【2で定義した変数名】

# includeについて
- componentsフォルダ内のファイルから他のファイルをinclude出来ない
  - index.htmiからcomponentsフォルダ内のファイルをincludeすることは可能

# 一部スタイルが当たらない問題について
- swiperに対してscssで指定してもスタイルが反映しない
  - jsでスタイルを当てると、scssが有効になる（バグ？）
  - 例：`$('.swiper-pagination-progressbar .swiper-pagination-progressbar-fill').css('background', 'red');`
  - slick, splide等では未検証
  -①postcss.config.jsのsafelistにクラス名を入れる、②他のCSSを先に読み込み、style.scssを最後に読み込む で対応可能


# vite_test
