let [jsday,jshour,jsminute,jssecond]=['00','00','00','00']
let D,H,M,S;
let intervaiId;

var audio=document.createElement("audio");
audio.setAttribute('src','sound2.mp3')
audio.loop=true;

function start_timer()
{
    directions1=document.getElementById("direction1")
    directions2=document.getElementById("direction2")
    timeron=document.getElementById("timer_on")
    timeover=document.getElementById("time_over")
    span_container=document.getElementById("span_container")
    timeup=document.getElementById("timeup_message")
    fcontent=document.getElementById("form_content")
    days=document.getElementById("day");
    hours=document.getElementById("hour");
    minutes=document.getElementById("minute");
    seconds=document.getElementById("second");
    button1=document.getElementById("btn1")
    button2=document.getElementById("btn2")
     
     D=days.value;
     H=hours.value;
     M=minutes.value;
     S=seconds.value;

     if(S>=0&&M>=0&&H>=0&&D>=0)
     {     
          audio.play();
          directions1.style.cssText="display:none;"
          directions2.style.cssText="display:none;"
          timeron.style.cssText="display:inline-block;"
          button1.style.cssText="display:none;"
          intervaiId=setInterval(start,1000)
     }
     else
     {
          directions1.style.cssText="display:inline-block;"  
          directions2.style.cssText="display:none;" 
     } 
}  
function start()
{
    if(S==0)
     {
         if(M!=0)
         {
              M--
              S=59
         }
         else if(H!=0)
         {
            H--
            M=59
            S=59
         }
         else if(D!=0)
         {
            D--
            H=23
            M=59
            S=59
         }
     //     else
     //     {
     //      clearInterval(intervaiId)
     //      timeover.style.cssText="display:inline-block;"    --> ham ye yaha bhi likh sakte hai qki d,h,m,s sabhi 0 ho chuke hai.
     //      timeron.style.cssText="display:none;"                 ye yaha likhana achhi baat hogi,qki jab sabhi 0 ho gaye to ham stop
     //                                                            karna chahte hai 
     //     }

     }
     else
     {
       S--   
     }
     days.value=(D==0)?"00":D<10?"0"+D:D;
     hours.value=(H==0)?"00":H<10?"0"+H:H;
     minutes.value=(M==0)?"00":M<10?"0"+M:M;
     seconds.value=(S==0)?"00":S<10?"0"+S:S;
     if(D==0&&H==0&&M==0&&S==0)
     {
          clearInterval(intervaiId)
          audio.pause();
          timeover.style.cssText="display:inline-block;"
          timeron.style.cssText="display:none;"
          fcontent.style.cssText="display:none;"
          span_container.style.cssText="display:none;"
          timeup.style.cssText="display:inline-block;"
     }
} 
function reset_timer()
{
     directions1=document.getElementById("direction1")
    directions2=document.getElementById("direction2")
    timeron=document.getElementById("timer_on")
    timeover=document.getElementById("time_over")
    span_container=document.getElementById("span_container")
    timeup=document.getElementById("timeup_message")
    fcontent=document.getElementById("form_content")
    days=document.getElementById("day");
    hours=document.getElementById("hour");
    minutes=document.getElementById("minute");
    seconds=document.getElementById("second");
    button1=document.getElementById("btn1")
    button2=document.getElementById("btn2")

     days.value=jsday;
     hours.value=jshour;
     minutes.value=jsminute;
     seconds.value=jssecond;

     clearInterval(intervaiId)
     
     audio.pause();
     directions1.style.cssText="display:none;" 
     directions2.style.cssText="display:inline-block;"
     timeron.style.cssText="display:none;"
     timeover.style.cssText="display:none;"
     button1.style.cssText="display:inline-block;"
     fcontent.style.cssText="display:display:display:none;"
     span_container.style.cssText="display:display:none;"
     timeup.style.cssText="display:none;"
     
}