var students ="太郎　次郎　三郎　花子　道子　里子";
//var sarray = ; 
var students2 = students.replace(/　/g,",");
console.log(students2);


var students ="太郎　次郎　三郎　花子　道子　里子";
var sarray = students.split('　');
var students2 = sarray.join(',');
console.log(students2);

/*
課題10-12+
以下のプログラムで、６人の名前がカンマ区切りで１行でコンソールに表示されるように、 ●と▲の部分を埋めよ。
※ ●の部分は課題11-12の●と同じとする。 
var students = "太郎 次郎 三郎 花子 道子 里子";
var sarray = ●;
var students2 = ▲;
console.log(students2);
*/