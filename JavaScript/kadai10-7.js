var man = {
    name:"太郎",
    age: 20,
    hobby:"手品",
    introduce: function(){
        return this.name+"といいます。年齢は"+this.age+"歳です。趣味は"+this.hobby+"です。";
    }
}
man['hobby'] = "昼寝"
console.log(man.introduce());

/*
課題10-7+
課題10-6のプログラムで、man.introduce();の直前に1行追加し、 hobbyのプロパティを"昼寝"に変更してから、コンソールに表示するようにせよ。
※ manのオブジェクトを生成した直後はhobbyは"手品"のままとする。
*/