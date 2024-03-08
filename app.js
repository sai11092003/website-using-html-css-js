
let starttime=0;
let elapsedtime=0;
let timer=null;
let isrunning=false;
const display=document.querySelector(".title1");
function start()
{
    if(!isrunning)
    {
        starttime=Date.now()-elapsedtime;
        timer=setInterval(updatenow,10);
        isrunning=true;
    }
}
function stop()
{
if(isrunning)
{
    clearInterval(timer);
    elapsedtime=Date.now()-starttime;
    isrunning=false;
}
}
function reset()
{
clearInterval(timer);
elapsedtime=0;
starttime=0;
timer=null;
isrunning=false;
display.textContent="00:00:00:00";
}
function updatenow()
{
    const currenttime=Date.now()
    elapsedtime=currenttime-starttime;
    let hrs=Math.floor(elapsedtime/(1000*60*60));
    let mins=Math.floor(elapsedtime/(1000*60)%60);
    let seconds=Math.floor(elapsedtime/(1000)%60);
    let mill=Math.floor(elapsedtime%1000/10);
    hrs=String(hrs).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    mill=String(mill).padStart(2,"0");
    display.textContent=`${hrs}:${mins}:${seconds}:${mill}`;
}
