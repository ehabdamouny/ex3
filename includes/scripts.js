var playground = document.getElementById('wrapper3');
document.getElementById("blackbox").onclick=addBox;

var size =80;
var charArray = ['A','B', 'C'];
var left ='';
var count =0;


function addBox () {

    for (var i=0 ; i<3 ;i++)
    {
    var box = document.createElement('div');
    box.className ='gbox';
    box.style.height= size+'px';
    box.style.width=size+'px';

    playground.appendChild(box);

    size+=20;

    box.addEventListener('click',clickbox)
    }
};

var clickbox=function (){

};


