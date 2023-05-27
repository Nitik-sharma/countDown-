let days=document.getElementById('days');
let hours=document.getElementById('hours');
let mins=document.getElementById('mins');
let secs=document.getElementById('secs');
let data=document.getElementById('date');
let button=document.getElementById('search');
button.addEventListener('click',function(){
let timer;
 data.addEventListener('change',function(event){
        timer =new Date((event.target.value));
        countDown(timer);
 })
 


const type=(time)=>{
    if(time<0){
        return `${time}`
    }
    return time<10?`0${time}`:time;

}
const upTime=(deadtime)=>{
    const currTime=new Date();
    const timeDiff=Number(deadtime-currTime);

    //calculate a sec,mins ,hours ,and days
    let calSecs=Math.floor(timeDiff/1000)%60;
    let calmins=Math.floor(timeDiff/1000/60)%60;
    let calhours=Math.floor(timeDiff/1000/60/60)%24;
    let calDays=Math.floor(timeDiff/1000/60/60/24);


    //assign a value in inner text 

    secs.innerText=type(calSecs);
    mins.innerText=type(calmins);
    hours.innerText=type(calhours);
    days.innerText=type(calDays);
}
const countDown=(timer)=>{
setInterval(()=>upTime(timer),1000);
}


//  timer=new Date("1 june 2023 18:21");
// countDown(timer);





})
