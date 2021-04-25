/*
 * @Author: song
 * @Date: 2021-04-25 09:40:25
 */
var obj = {
  name: 'obj',
  getName: function() {
    return this.name
  }
}
var obj1 = {
  name: 'obj1'
}
console.log(obj.getName())
console.log(obj.getName.call(obj1))

// -------------------------简化document.getElementById
// // 1.以下是正确的
// var getId = function(id) {
//   return document.getElementById(id)
// }
// getId('idName')
// // 以下是不正确的
// var getId1 = document.getElementById
// getId1('idName')
// // 如何将上面的这个修改
// var getId2 = (function(fn) {
//   return function() {
//     return fn.apply(document, arguments)
//   }
// })(document.getElementById)
// getId2('idName')
