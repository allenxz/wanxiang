exports.npmTest = (name) => {
  console.log(name)
}

// randomStr 返回指定位数的随机字符串 
// @min: 最小位数
// @max: 最大位数
exports.randomStr = (min, max) => {
  let res = '',
    range = max ? Math.round(Math.random() * (max - min)) + min : min,
    charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < range; i++) {
    let index = Math.round(Math.random() * (charStr.length - 1))
    res += charStr.substring(index, index + 1)
  }
  return res
}