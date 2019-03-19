function sum(a){
    var s = 0;
    for(var i=0; i<a.length; i++){
        s += a[i];
    }
    return s;
}
var b=[10,8,14,15];
console.log(sum(b));

/*
課題10-2+
以下のsum関数は、引数に配列を渡すとその合計値を返す。 ●、▲、■、◆の部分を埋めてプログラムを完成せよ。 
function sum(a) {
  var s = 0;
  for (var i = 0; i < ●; i++) {
    s += ▲;
  }
  ■;
}
var b = [10, 8, 14, 15];
console.log(◆);
*/
