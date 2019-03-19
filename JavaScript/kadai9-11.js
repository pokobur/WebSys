var b={ taro:100, jiro:75, saburo:80, shirou:60 };
for (var key in b){
    if (key.indexOf("a") >= 0){
        console.log(key + "=" + b[key] );
    }
}

/*
課題9-11
以下のプログラムで、連想配列bに入っているキーに"a"の文字が含まれているもののみ キーと値を表示するプログラムを●、■、▲の部分を埋めて作成せよ。
なお、indexOfは指定した文字列が含まれているとその位置を返し、含まれていないと-1を返す。 例えば、var s = "abcdef"; console.log(s.indexOf("cd")); は、"abcdef"に"cd"が先頭から3番目(先頭を0から初めると2番目)に含まれているので2が返る。 
var b={ taro:100, jiro:75, saburo:80, shirou:60 };
for (var key in ●) {
  if (key.indexOf("■") >= 0) {
    console.log(key + "=" + ▲);
  }
}
*/