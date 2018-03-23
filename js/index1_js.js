var page=1;
    var finished=0;  
    var sover=0;  
    var setdefult=setInterval(function (){  
        if(sover==1)  
            clearInterval(setdefult);     
        else if($(".prolist").height()<$(window).height())  
            loadmore($(window));  
        else  
            clearInterval(setdefult);  
    },500);  
    function loadover(){  
        if(sover==1)  
        {     
            var overtext="Duang～到底了";  
            $(".loadmore").remove();  
            if($(".loadover").length>0)  
            {  
                $(".loadover span").eq(0).html(overtext);  
            }  
            else  
            {  
                var txt='<div class="loadover"><span>'+overtext+'</span></div>'  
                $("body").append(txt);  
            }  
        }  
    }  
    var vid=0;  
    function loadmore(obj){  
        if(finished==0 && sover==0)  
        {  
            var scrollTop = $(obj).scrollTop();  
            var scrollHeight = $(document).height();  
            var windowHeight = $(obj).height();  
              
            if($(".loadmore").length==0)  
            {  
                var txt='<div class="loadmore"><span class="loading"></span>加载中..</div>'  
                $("body").append(txt);  
            }
            if (scrollTop + windowHeight -scrollHeight<=50 ) {  
                finished=1;  
                var result = "";  
                for(var i = 0; i < 6; i++){  
                    vid++;  
                    result+='<li>'  
                                +'<a href="#">我是列表'+parseInt(vid)+'</a>'  
                            +'</li>'  
                }  
                setTimeout(function(){  
                    //$(".loadmore").remove();  
                    $('.prolist').append(result);  
                    page+=1;  
                    finished=0;  
                    //最后一页  
                    if(page==10)  
                    {  
                        sover=1;  
                        loadover();  
                    }  
                },1000);  
            }  
        }  
    }  
    //页面滚动执行事件  
    $(window).scroll(function (){  
        loadmore($(this));  
    });  