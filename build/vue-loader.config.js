module.exports = (isDev) => {
    return {
        preserveWhitepace: true,
        extractCSS: !isDev,
        cssModules:{},
        hotReload: false,//根据环境变量生成
    }
}