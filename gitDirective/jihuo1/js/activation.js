$(function(){
    var str="?register=123&abc=333";
    var subStr=str.slice(str.indexOf("?")+1);
    var arr=subStr.split("&");
    var params={};
    for(var i=0;i<arr.length;i++){
        var subArr=arr[i].split("=");
        params[subArr[0]]=subArr[1];
    }
    console.log(params);
    var r=params.register;
    console.log(r);
});



$("div.send button").click(function(){
    var btn= $(this);
    $(this).attr("disabled",true);
    $(this).css("backgroundColor","#ddd");
    var t=8;
    console.log(t);
    var timer=setInterval(function(){
        t-=1;
        btn.next().next().html(t+"s");
        if(t==0){
            clearInterval(timer);
            timer=null;
            btn.css("backgroundColor","#e4393c");
            btn.attr("disabled",false);
            btn.next().next().html("");
        }
    },1000);
    console.log(222);






    var value=$("div.cardID input").val();
    if(value){
        $.ajax({
            type:"get",
            url:"http://localhost:63342/Node.js/chenying/jihuo/activation.html",//调后台验证码接口
            data:{regiter:r},
            success:function(data){
                console.log("验证码发送成功响应消息："+data);

                if(data.resultCode == '-1'){
                    $("span").html(data.resultMsg);
                }else if(data.resultCode == '-2'){
                    $("span").html(data.resultMsg);
                }
                $("body>span").html("发送成功");
            },
            error:function(data){
                $("body>span").html("发送失败");
            }
        });
    }
});

$("footer button").click(function(){
    console.log(1);
    var cardId=$("div.cardID input").val();
    var send=$("div.send input").val();
    if(cardId && send){
        $.ajax({
            type:"post",
            url:"http://localhost:63342/Node.js/chenying/jihuo/activation.html",//调后台激活接口
            data:{cardId:cardId,send:send},
            success:function(data){
                //1.后台返回的数据
                //2.
//                if(parseInt(data.reusltcode) == 0){
//                    //tishi
//                }else if(){
//                    //.....
//
//                }
            },
            error:function(){
                $("body>span").html("发送失败");
            }
        });
    }else{
        $("body>span").html("卡号不能为空");
    }
});