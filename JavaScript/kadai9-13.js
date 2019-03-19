var b={ taro:100, jiro:75, saburo:80, shirou:60 };
for (var key in b){
    if (key.indexOf("i") == b[key] >= 70){
        console.log(key + "=" + b[key]);
    }
}

/*
以下のプログラムで、連想配列bに入っているキーに"i"が含まれており、かつ、 値が70以上であるもののみ キーと値を表示するプログラムを●、■、▲の部分を埋めて作成せよ。
var b={ taro:100, jiro:75, saburo:80, shirou:60 };
for (var key in ●) {
  if (■) {
    console.log(key + "=" + ▲);
  }
}
*/