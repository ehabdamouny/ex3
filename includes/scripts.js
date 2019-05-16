var playground = document.getElementById('wrapper3');
document.getElementById("blackbox").onclick=addBox;

var size =80;
var charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var letters=[];
var left ='';
var count =0;
var choosenBox = [];
var random =0;

var clickbox = function (){
    if (choosenBox.length == 2){
        clearView();
    }
    if (!this.className.includes('show')) {
        if (!this.className.includes('correct')) {
            this.className = this.className + ' show';
            choosenBox.push(this);
            if (choosenBox.length == 2) {
                checkGame();
                // ChoosenCheck();
            }
        }
    }
    else {
        clearView();
    }
};


function addBox () {

    shuffelChar();

    for (var i=0 ; i<3 ;i++)
    {
    var box = document.createElement('div');
    box.className ='gbox';
    box.style.height= size+'px';
    box.style.width=size+'px';

    var p = document.createElement('P');
    p.style.marginTop = size*0.25+'px';
    p.style.fontSize = size*0.25+'px';
    p.innerHTML = letters[i];
    box.appendChild(p);

    playground.appendChild(box);

    size+=20;

    box.addEventListener('click',clickbox);
    }
};


var shuffelChar = function() {
    if (count%2 == 0) {  
        random = Math.floor(Math.random() * charArray.length);
        letters.push(charArray[random]);
        left = charArray[random];

        do {
            random = Math.floor(Math.random() * charArray.length);
        } while (charArray[random] === left); // to insure different pairs.

        letters.push(charArray[random]);
        letters.push(charArray[random]);
    } else {
        letters.push(left);

        do {
            random = Math.floor(Math.random() * charArray.length);
        } while (charArray[random] === left); // to insure different pairs.

        left = charArray[random];
        letters.push(left);
        letters.push(left);
    }

    ++count;
    letters = Randomize(letters);
};

var Randomize = function (array) {
    var i = 0;
    for (i = 0; i < array.length - 1; ++i) {
        var j = i + Math.floor(Math.random() * (array.length - i));

        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return array;

};


var clearView = function() {
    for (let i=0; i< choosenBox.length; i++){
    choosenBox[i].className=choosenBox[i].className.replace('show', '');
    }
    choosenBox=[];
};


var checkGame = function () {
    if (compareValues()) {
        for (i = 0; i < choosenBox.length; ++i) {
            choosenBox[i].className = choosenBox[i].className.replace('show', 'correct');
        }
    }
    else {
        setTimeout(function () { //timer delay after 0.5 sec to show the letter.
            clearView();
        }, 1000);
    }
};


var compareValues = function () {
    var str1 = choosenBox[0].innerHTML;
    var str2 = choosenBox[1].innerHTML;

    var index = str1.indexOf('">');
    var slashIndex = str1.indexOf('</p');
    var fstr1 = str1.substring(index + 2, slashIndex);

    index = str2.indexOf('">');
    slashIndex = str2.indexOf('</p');
    var fstr2 = str2.substring(index + 2, slashIndex);

    if (fstr1 == fstr2)
        return true;
    return false;
};
