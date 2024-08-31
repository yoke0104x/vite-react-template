/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-30 13:24:13
 */
// postcss.config.js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // 'postcss-pxtorem': {
        //     rootValue: 37.5, // (Number | Function) 表示根元素字体大小或根据input参数返回根元素字体大小
        //     unitPrecision: 5, // （数字）允许 REM 单位增长到的十进制数字
        //     propList: ['*'], // 可以从 px 更改为 rem 的属性 使用通配符*启用所有属性
        //     selectorBlackList: [],// （数组）要忽略并保留为 px 的选择器。
        //     replace: true, // 替换包含 rems 的规则，而不是添加回退。
        //     minPixelValue: 2, // 最小的转化单位
        //     exclude: /node_modules/i // 要忽略并保留为 px 的文件路径
        // }
    },
};
