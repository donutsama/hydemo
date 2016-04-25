$(function(){
    showBriefText("span.name-l",10,true);
});

function getBriefText(text, maxLength) {
    if (!text) { // 文字没有内容，直接返回空文本
        return "";
    }
    if (text.length <= maxLength) { // 文字没有超过最长限制，直接返回全部文字
        return text;
    }
    // 文字超过了最长限制
    var brief = text.substring(0, maxLength); // 截取文本为maxLength个字，
    // brief += '...'; // 文本后面加上...表示有省略文字。
    return brief;
}
function getBriefText1(text, maxLength) {
    if (!text) { // 文字没有内容，直接返回空文本
        return "";
    }
    if (text.length <= maxLength) { // 文字没有超过最长限制，直接返回全部文字
        return text;
    }
    // 文字超过了最长限制
    var brief = text.substring(0, maxLength); // 截取文本为maxLength个字，
    return brief;
}

/**
 * 更改某个元素(span)里的文本长度，最长不超过maxLength个。如果超过的话，是否需要用省略号代表超过的文字
 * span: 要更改的元素，比如 $("div span");
 * maxLength: 文字的字数限制，比如 100;
 * suffix: 是否需要用省略号代表超过的文字, true，代表需要省略号，false，代表不需要;
 */
function showBriefText(span, maxLength, suffix) {
    var allSpan = $(span);
    // var allSpan = span;

    for (var i = 0; i < allSpan.length; i++) {

        var spanText = allSpan.eq(i).text();

        if (suffix) {
            allSpan.eq(i).text(getBriefText(spanText, maxLength));
        } else {
            allSpan.eq(i).text(getBriefText1(spanText, maxLength));
        }

    }
}
