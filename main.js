let start = document.getElementById('start');
    color = document.getElementById('color');
    col = document.getElementById('col')
    left = document.getElementById('left');
    right = document.getElementById('right');
    down = document.getElementById('down');
    up = document.getElementById('up');
    pers = document.getElementById('min');
    pos_h = 0;
    pos_v = 0;
    sum = 5;
    fly = 262;
    ruchka = document.getElementById('ruchka');
    palka = document.getElementById('palka');
col.addEventListener('click', random);
function random(){
    pers.style.backgroundColor = color.value;
}
start.addEventListener('click', begin);
function begin() {
    pers.style.opacity = '1';
    pers.style.backgroundColor = color.value;
}
right.addEventListener('click', sw_right)
function sw_right() {
    pos_h+=sum
    if(pos_h > 678){
        alert('Wrong way')
    }else{
        pers.style.left = pos_h+'px'
        ruchka.style.top = '-35px';
        ruchka.style.left = '27px';
        palka.style.margin = '-20px 0 0 25px';
        palka.style.rotate = '22deg';
        palka.style.clipPath = 'polygon(0 0, 100% 0 , 100% 90%, 0 100%)';
    }
}
left.addEventListener('click', sw_left)
function sw_left() {
    pos_h-=sum
    if(pos_h < 10){
        alert('Wrong way')
    }else{
        pers.style.left = pos_h+'px';
        ruchka.style.top = '-35px';
        ruchka.style.left = '-3px';
        palka.style.margin = '-20px 0 0 15px';
        palka.style.rotate = '-22deg';
        palka.style.clipPath = 'polygon(0 0, 100% 0 , 100% 100%, 0 90%)';
    }
}
down.addEventListener('click', sw_down)
function sw_down() {
    pos_v+=fly
    if (pos_v > 280){
        alert('You crash')
    }else{
        pers.style.top = pos_v+'px'
        ruchka.style.top = '-27px';
        ruchka.style.left = '12px';
        palka.style.margin = '-25px 0 0 20px';
        palka.style.rotate = '0deg';
        palka.style.clipPath = 'none';
    }
}
up.addEventListener('click', sw_up)
function sw_up() {
    pos_v-=fly
    if (pos_v < 0){
        alert('You crash')
    }else{
        pers.style.top = pos_v+'px';
        ruchka.style.top = '-45px';
        ruchka.style.left = '12px';
        palka.style.margin = '-25px 0 0 20px';
        palka.style.rotate = '0deg';
        palka.style.clipPath = 'none';
    }
}
// ruchka.style.top = '-30px';
// ruchka.style.left = '12px';
// palka.style.margin = '-25px 0 0 20px';
// palka.style.rotate = '0deg';
// palka.style.clipPath = 'none';