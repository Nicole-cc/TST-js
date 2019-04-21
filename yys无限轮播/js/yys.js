window.onload=function () {
//1.动态创建下部按键
    var slider=$("slider");
    var slider_main=$("slider_main");
    var slider_main_img=slider_main.children;
    var slider_ctl=$("slider_ctl");
    var slider_ctl_child=slider_ctl.children;
    var iNow=0;
    for(var i=0;i<slider_main_img.length;i++){
        var span=document.createElement("span");
        span.className="slider-ctl-icon";
        span.innerText=slider_main_img.length-i-1;
        slider_ctl.insertBefore(span,slider_ctl_child[1]);
    }
    slider_ctl_child[1].className="slider-ctl-icon current";
//2.图片归位
    var scrollW=parseInt(slider.offsetWidth);
    for(var j=1;j<slider_main_img.length;j++){
        slider_main_img[j].style.left=scrollW+"px"
    }
//3.监控循环点击事件
    for(var i=0;i<slider_ctl_child.length;i++){
        slider_ctl_child[i].onmousedown=function () {
            if(this.className==="slider-ctl-prev"){
                /*
                 1.当前可视区域的图片快速右移;
                 2.上一张图片快速出现在可视区域的左边
                 3.让这张图片做动画进入
                */
                buffer(slider_main_img[iNow],{"left":scrollW});
                iNow--;
                if(iNow<0){
                    iNow=slider_main_img.length-1;
                }
                slider_main_img[iNow].style.left=-scrollW+"px";
                buffer(slider_main_img[iNow],{"left":0})
            }else if(this.className==="slider-ctl-next"){
                    autoPlay()
            }else{
                var index=parseInt(this.innerText);
                if(index>iNow){
                    buffer(slider_main_img[iNow],{"left":-scrollW});
                    slider_main_img[iNow].style.left=scrollW+"px";
                }else{
                    buffer(slider_main_img[iNow],{"left":scrollW});
                    slider_main_img[iNow].style.left=-scrollW+"px";
                }
                iNow=index;
                buffer(slider_main_img[iNow],{"left":0})
            }
            changeIndex();
        }

    }
//4切换索引
    function changeIndex() {
        for(var j=1;j<slider_main_img.length-1;j++){
            slider_ctl_child[j].className="slider-ctl-icon";
        }
        slider_ctl_child[iNow+1].className="slider-ctl-icon current"
    }
//5.自动轮播
    var timer=setInterval(autoPlay,1000);
    function autoPlay() {

                /*
                 1.当前可视区域的图片快速左移;
                 2.下一张图片快速出现在可视区域的右边
                 3.让这张图片做动画进入
                 */
                buffer(slider_main_img[iNow],{"left":-scrollW});
                iNow++;
                if(iNow>slider_main_img.length-1){
                    iNow=0;
                }
                slider_main_img[iNow].style.left=scrollW+"px";
                buffer(slider_main_img[iNow],{"left":0});
                changeIndex()

    }
    slider.onmouseover=function () {
        clearInterval(timer);
    };
    slider.onmouseout=function () {
       timer=setInterval(autoPlay,1000)
    }
};

