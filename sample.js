const Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};
// メソッドの追加
Member.prototype = {
    getName : function() {
        return `${this.lastName} ${this.firstName}`;
    },
    getHoge : function() {
        return "Hoge";
    }
};
// プロパティの追加
Member.prototype.sex = 'M';
// add static property
Member.version = '1.0';
// add static method
Member.sf = function() {
    return 'from static function';
}

let m1 = new Member('hoge', 'hage');
let m2 = new Member('hoge', 'hage');

// プロパティの更新
console.log(`${m1.sex} ${m2.sex}`); // => M M
m2.sex = 'F';
console.log(`${m1.sex} ${m2.sex}`); // => M F

// プロパティの削除
delete m1.sex;
delete m2.sex;
console.log(`${m1.sex} ${m2.sex}`); // => M M
// protptype method を使う
console.log(`${m1.getHoge()}`);
// staticメンバを使う
console.log(`${m1.version} ${Member.version}`); // => undefined 1.0
console.log(`${Member.sf()}`); // m1.sf()はコールできない

// 動的にメンバー関数を変更
//m.getName = function() {
//    return 'test';
//};
//console.log(m.getName());

