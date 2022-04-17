//Changing background-color and height of the sorting element.

var speed=1;

inp_aspeed.addEventListener("input",vis_speed);
inp_as.addEventListener("input",vis_speed);
var inp_gen = document.getElementById("a_generate");
inp_gen.addEventListener("click", vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1; 
                break;
        case 2: speed=5;
                break;
        case 3: speed=20;
                break;
        case 4: speed=50;
                break;
        case 5: speed=100;
                break;
    }
     let size = parseInt(array_size);
    delay_time=20000/(Math.floor(size/1)*speed);        //Decrease numerator to increase speed.
}
let size = parseInt(array_size);
var delay_time=20000/(Math.floor(size/1)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated on every div change so that visualization is visible.

function div_update(cont,height,color)
{
    let size = parseInt(array_size);
    window.setTimeout(function(){
        cont.innerHTML = height;
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/size-(2*margin_size)) + "%; height:" + (height) + "%; color :white; background-color:" + color + ";";
    },c_delay += delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
            inp_aList.disabled = false;
        }
    },c_delay += delay_time);
}
