var man = {
    name:"太郎",
    age:20,
    hobby:"手品",
    introduce: function(){
        return this.name+"といいます。年齢は"+this.age+"歳です。趣味は"+this.hobby+"です。";
    }
}
console.log(man.introduce());


/*
課題10-6
以下のプログラムで、コンソールに "太郎といいます。年齢は20才です。趣味は手品です。" と表示するように、●、▲、◆の部分を埋めよ。 
var man = {
    name: "太郎",
    age: 20,
    hobby: "手品",
    introduce: function() {
        return ●+"といいます。年齢は"+▲+"才です。趣味は"+■+"です。";
    }
}
console.log(man.introduce());
*/