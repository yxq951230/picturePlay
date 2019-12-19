var index=0,
    timer = null,      //定时器
    main =byId("main"),
    prev=byId("prev"),//上一张
    next=byId("next"),//下一张
    pics=byId("banner").getElementsByTagName("a"),
    dots=byId("dots").getElementsByTagName("i"),
    size=pics.length;

function byId(id){
    return typeof (id)==="string" ? document.getElementById(id):id;
}
//清除定时器，停止自动轮播
function stopAutoPlay() {
    if (timer) {
        clearInterval(timer);
    }
}
//自动轮播
function startAutoPlay() {
    //间隔调用
    timer = setInterval(function () {
    index++;
    if (index>=size)index=0;
    changeImg();
    },3000)
}
//切换图片
function changeImg(){
    //遍历所有图片，将图片隐藏，将圆点上的类清除
    for (var i=0;i<size;i++){
        pics[i].style.display="none";
        //dots[i].className="";
        dots[i].className = "slider_indicators_btn"
    }
    //显示当前图片
    pics[index].style.display="block";
    //dots[index].className = "active";
    //当前圆点高亮显示
    dots[index].className = "slider_indicators_btn active";
}
//点击上一张按钮显示上一张图片
prev.addEventListener("click",function () {
    index--;
    if (index<0) index = size-1;
    changeImg();
})
//点击下一张按钮显示下一张图片
next.addEventListener("click",function () {
    index++;
    if (index>=size) index = 0;
    changeImg();
})
//点击圆点索引切换图片
for(var d = 0;d<size;d++){
    dots[d].setAttribute("data-id",d);
    dots[d].addEventListener("mouseover",function () {
        index =this.getAttribute("data-id");
        changeImg();
    });
}

//鼠标滑入main，停止轮播
main.addEventListener("mouseover",stopAutoPlay);
//鼠标滑入main，继续轮播
main.addEventListener("mouseout",startAutoPlay);
//自动开启轮播
startAutoPlay();

