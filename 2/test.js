//新增的字符串方法
console.log('mjw'.indexOf('j')!==-1);
console.log ('mjw'.indexOf('jw')!==-1);
console.log('mjw'.includes('y'));
console.log ('mjw'.startsWith('m'));
let title='王小哈';
let tpl=`
<div>
<span>${title+`
<span>${1234} 2019</span>`}</span>
</div>
`;
console.log(tpl);
let a=Symbol();
let b=Symbol();
console.log(a===b);
//file1 文件1 插件
let name=Symbol();
{
    var person={} ;
  person[name]='file1';}
  console.log(person[name])
//文件2  symbol可以临时更改重写变量,但是不改变
//插件带来的全局变量
{
    let name = Symbol();
    person[name]='file2';
    console.log(person[name])
    console.log(person);
}
console.log(person[name]);