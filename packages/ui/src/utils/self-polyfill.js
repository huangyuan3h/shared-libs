// 提供一个空的 self 对象，用于服务器端渲染
module.exports = typeof self !== 'undefined' ? self : {};
