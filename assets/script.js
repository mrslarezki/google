

var div = document.getElementById('setting_panel');
var display = 0;

function panel(){
    if(display == 1){
        div.style.display = 'none';;
        display = 0;
    }else{
        div.style.display = 'block';
        display = 1;
    }
}


var body = document.getElementById('body');

var bg = 0;

function change_theme(){
    if (bg == 1){
        body.style.backgroundColor = '#fff';
        bg = 0;
    }else{
        body.style.backgroundColor = '#000000c6';
        bg = 1;
    }

}




var panl = document.getElementById('tools_panel');
var display = 0;

function toolpanel(){
    if(display == 1){
        panl.style.display = 'none';;
        display = 0;
    }else{
        panl.style.display = 'block';
        display = 1;
    }
}