var b={ taro:100, jiro:75, saburo:80, shirou:60 };
for (var key in b){
    if (b[key] >= 80){
        console.log(key + "=" + b[key]);
    }
}


/*
課題9-12+
以下のプログラムで、連想配列bに入っている値が80以上であるもののみ キーと値を表示するプログラムを●、■、▲の部分を埋めて作成せよ。
var b={ taro:100, jiro:75, saburo:80, shirou:60 };
for (var key in ●) {
  if (■ >= 80) {
    console.log(key + "=" + ▲);
  }
}
*/