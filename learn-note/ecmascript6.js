Number.isInteger() //用来判断一个值是否为整数。
Math.trunc() //方法用于去除一个数的小数部分，返回整数部分。
'use strict'; //严格模式。
[1, 2, 3].map(function(x) {
    return x * x;
}); //循环数组
[1, 2, 3].forEach((x) => {

})
for (let [index, elem] of['a', 'b'].entries()) {
    console.log(index, elem);
} //遍历数组
Array.of() //方法用于将一组值，转换为数组。

// ES6 一共有5种方法可以遍历对象的属性。

// （1）for...in

// for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

// （2）Object.keys(obj)

// Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

// （3）Object.getOwnPropertyNames(obj)

// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

// （4）Object.getOwnPropertySymbols(obj)

// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

// （5）Reflect.ownKeys(obj)

// Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。