let ph;
function init() {
    ph=window.innerHeight;
    $(':root').css('--ph',`${ph}px`);
    if(window.innerWidth<500){
        $('#title').css('--sc',`calc(${window.innerWidth} / 500)`);
    }else{
        $('#title').css('--sc',`1`);
    }
}
init();
document.addEventListener('scroll',()=>{
    let t=$('html').scrollTop();
    if(t==0){
        $('#emblem').css('transform',`translateY(0)`);
        $('#title>.xing').css('transform',`translateY(100px)`);
        $('#title>.xing').css('opacity',`0`);
        $('#title>.lan').css('transform',`translateY(100px)`);
        $('#title>.lan').css('opacity',`0`);
        $('#title>.text').css('transform',`translateY(50px)`);
        $('#title>.text').css('opacity',`0`);
    }else if(0<t && t<100){
        $('#emblem').css('transform',`translateY(-${(t/2)}px)`);
        $('#title>.xing').css('transform',`translateY(${(100-t)}px)`);
        $('#title>.xing').css('opacity',`${(t/100)}`);
        $('#title>.lan').css('transform',`translateY(100px)`);
        $('#title>.lan').css('opacity',`0`);
    }else if(t>=100 && t<200){
        $('#emblem').css('transform',`translateY(-50px)`);
        $('#title>.xing').css('transform',`translateY(0)`);
        $('#title>.xing').css('opacity',`1`);
        $('#title>.lan').css('transform',`translateY(${(200-t)}px)`);
        $('#title>.lan').css('opacity',`${((t-100)/100)}`);
        $('#title>.text').css('transform',`translateY(50px)`);
        $('#title>.text').css('opacity',`0`);
    }else if(t>=200 && t<300){
        $('#title>.lan').css('transform',`translateY(0)`);
        $('#title>.lan').css('opacity',`1`);
        $('#title>.text').css('transform',`translateY(0)`);
        $('#title>.text').css('opacity',`1`);
    }else{
        $('#emblem').css('transform',`translateY(-50px)`);
        $('#title>.xing').css('transform',`translateY(0)`);
        $('#title>.xing').css('opacity',`1`);
        $('#title>.lan').css('transform',`translateY(0)`);
        $('#title>.lan').css('opacity',`1`);
        $('#title>.text').css('transform',`translateY(0)`);
        $('#title>.text').css('opacity',`1`);
    }
});
window.onresize=init;
$('html')[0].scroll(0,0);