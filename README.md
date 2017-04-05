# anaGraph()
* jQuery Plugin for Anagraph / Anaglyph effect
* 3D effect by Red/Cyan glassis
* Easy to use : Just put Selector on API  

* アナグラフ（赤青メガネで見る立体画像）に変換するjQuery用のプラグイン。
* セレクタを指定するだけで、その部分がアナグラフになります。  

## Usages

__$("div").anaGraph();__

* You can scale 3D effect with Depth3D parameter by (px).  Default set to 24px. Negative Number will result Dent 3D effect.
* 立体を大きくしたい場合は、Depth3Dで指定1。デフォルトは、24px　。マイナスの数字で、凹んだ立体画像になる。

__$("div").anaGraph({Depth3D:36px});__

* アナグラフ用の眼鏡は、市販されていますし、セロハンで作ることも可能です。

## Sample

    <!DOCTYPE html>
    <html lang="ja">
    <body>
    <main>
        <h1>anaGraph Sample Code</h1>
    </main>

    <script type="text/javascript">
      $(window).load(function(){
          $('main').anaGraph();
      });
    </script>
    <script type="text/javascript" src="anagraph_plugin.js"></script>
    </body>
    </html>

## Demo

[Demo](http://takwd.com/anagraph/demo)

