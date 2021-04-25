/*
 * @Author: song
 * @Date: 2021-04-24 20:56:14
 */
// 判断数据类型
// let isType = (type) => (obj) => Object.prototype.toString.call(obj) === `[object ${type}]`
// var val = isType('String')('123')
// console.log(val)

//
// var getSingle = function(fn) {
//   var ret
//   return function() {
//     return ret || (ret = fn.apply(this, arguments))
//   }
// }
// var getScript = getSingle(function() {
//   return document.createElement('script')
// })
// var script1 = getScript()
// var script2 = getScript()
// console.log(script1 === script2)

// this
// 1.作为对象的方法调用
// var obj = {
//   a: 1,
//   getA: function() {
//     console.log(this === obj)
//     console.log(this.a)
//   }
// }
// obj.getA() // 1

// 2.作为普通函数调用
// a)
// global.name = 'node env'
// var getName = function() {
//   return this.name
// }
// console.log(getName())
// b)
// var myObj = {
//   name: 'obj name',
//   getName: function() {
//     return this.name
//   }
// }
// var getName = myObj.getName
// console.log(getName()) // node env

// 3.构造器调用
// var myClass = function() {
//   this.name = 'name'
// }
// var obj = new myClass()
// console.log(obj.name) // name
// // 如果构造函数显示返回一个对象
// var myClass1 = function() {
//   this.name = 'name'
//   return {
//     name: 'lalala'
//   }
// }
// var obj1 = new myClass1()
// console.log(obj1.name) // lalala
