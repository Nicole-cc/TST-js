/**
 *
 * @param id
 * @returns {*}
 */
function $(id) {
    return typeof id==="string"?document.getElementById(id):null;
}

/**
 * 获取滚动的头部距离和左边距离
 * scroll().top  scroll().left
 */
function scroll() {
    if(window.pageYOffset!==null){
        return{
            top:window.pageYOffset,
            left:window.pageXOffset
        }

    }
    else if(document.compatMode==="CSS1Compat"){
        return{
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
    return{
        top:document.body.scrollTop,
        left:document.body.scrollLeft
    }
}
function client() {
    if(window.innerHeight){
        return{
            width:window.innerWidth,
            height:window.innerHeight
        }
    }
    else if(document.compatMode != 'CSS1Compat'){
        return{
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
    return{
        width:document.documentElement.clientWidth,
        Height:document.documentElement.clientHeight
    }


}