//var a=1;
//let b=2;
//console.log("a:",a);
//console.log("b:",b);
//if (true)
//{
    //var a=1;
   // let b=2;
//}
//console.log("a:",a);
//console.log("b:",b);
//数组的解构赋值
//var [a,...c]=[1,2,3,4];
//document.write("a:",a);
//document.write("c:",c);
//对象的解构赋值
//var obj={
    //a:1,
    //b:2
//}
//let a=0;
//document.write(a);
//({a,b}=obj);在对象外部定义变量a=0
//document.write(a);
//document.write(b);
//document.write("<br/");
var obj1={
    arr:['mjw',
        {
            c:1,
        }]
}
let {arr:[greet,{c}]}=obj1;
document.write(greet);
document.write(c);
//变量的解构赋值其他
let {length} = 'mjw';
console.log(length);
//对函数的传参进行解构
var arr=[1,2];
function test([a,b]) {//数组解构需要顺序，
                      //对象解构不需顺序
    document.write("a:",a);
    document.write("b:",b);
}
test(arr);
document.write("<br/>");
var obj2={b:2};
function test1({a=10,b}) {
    //此时a的默认值为10，与上不同的是数组变成了
    //对象
    document.write("a:",a);
    document.write("b:",b);
}
test1(obj2);
var obj5={
    m:2,
    n:5
}
let {m:M,n}=obj5;
console.log(M);
console.log(n);
console.log(m);
