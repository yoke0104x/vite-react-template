// ./js/rem.js 路径
(function (win, doc) {
    if (!win.addEventListener) return
    function setFont() {
        let screenWidth = document.querySelector('html').offsetWidth
        const baseSize = 75 // 我的设计稿是750px，如果是375px则写37.5
        const pageWidth = 750
        let fontSize = (baseSize * screenWidth) / pageWidth
        document.querySelector('html').style.fontSize = `${fontSize}px`
    }
    setFont()
    setTimeout(() => {
        setFont()
    }, 300)
    doc.addEventListener('DOMContentLoaded', setFont, false)
    win.addEventListener('resize', setFont, false)
    win.addEventListener('load', setFont, false)
})(window, document)
