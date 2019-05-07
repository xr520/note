//判断ie
let isIE = () => {
if (!!window.ActiveXObject || 'ActiveXObject' in window){
    return true;
}
else
    return false;
}
if(isIE()){
$("body").addClass("ie");
}

function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  return "Chrome";
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}
//以下是调用上面的函数
var mb = myBrowser();
if ("IE" == mb) {
//  alert("我是 IE");
}
if ("FF" == mb) {
//  alert("我是 Firefox");
}
if ("Chrome" == mb) {
//  alert("我是 Chrome");
}
if ("Opera" == mb) {
//  alert("我是 Opera");
}
if ("Safari" == mb) {
//  alert("我是 Safari");
}
 var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//alert('是否是iOS：'+isiOS);
   if(isiOS == true){
    	$('.modelCN').css('margin-left','-.08rem');
    }





    //checkie9: 
    () => {
        var userAgent = navigator.userAgent.toLocaleUpperCase();
        var msie = /MSIE [\d\.]+/;
        var version = msie.exec(userAgent);
        if (version == "MSIE 9.0" || version == "MSIE 10.0") return true;
        else return false;
    };
    //checkfirefox: 
    () => {
        var ua = navigator.userAgent.toLowerCase(),
            version = ua.match(/firefox\/([\d.]+)/),
            browser = (version !== null) ? version.toString().slice(0, 7) : false,
            firefox = (browser !== undefined && browser === "firefox") ? true : false;

        return firefox;
    };
