var deepPram = window.location.search;
let UrlDeepJumper = document.querySelector(".DeepUrlJumper");
var JumpURL = "deep://hyk0501.github.io/temp-web-forapp" + deepPram;
UrlDeepJumper.onclick=function(){
        console.log(JumpURL);
        window.location.href = JumpURL;
    }