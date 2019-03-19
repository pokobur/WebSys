var obj1 = {
    name: "しょた",
    greet: function(age,from){
        console.log(this.name + "です！よろしく");
        console.log("年齢は、" + age + "歳です。");
        console.log("出身は、" + from +　"県です。");
    }
};
var obj2 = {
    name: "ショタ"
};
var param =  [8,"千葉"];
obj1.greet.apply(obj2,param);