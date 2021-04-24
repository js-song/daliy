/*
 * @Author: song
 * @Date: 2021-04-24 20:56:14
 */
let isType = (type) => (obj) => Object.prototype.toString.call(obj) === `[object ${type}]`
var val = isType('String')('123')
console.log(val)
