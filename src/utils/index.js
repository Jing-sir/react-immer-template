export function typeOf(obj) { // 精准判断数据类型
    return {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
        '[object Document]': 'document',
        '[object HTMLDivElement]': 'div',
        '[object HTMLBodyElement]': 'body',
        '[object HTMLDocument]': 'document',
        '[object HTMLHtmlElement]': 'html',
        '[object Blob]': 'blob',
        '[object FormData]': 'formData',
    }[Object.prototype.toString.call(obj)];
}
